let auth0;

const backendURL = process.env.REACT_APP_BACKEND_URL;

export const configureClient = async () => {
  if (typeof auth0 !== 'undefined') {
    console.log('skipping config');
    return;
  }
  const response = await fetch(backendURL + 'client-info');
  const config = await response.json();

  console.log('config', config);
  // createAuth0Client comes from auth0 script tag
  try {
    auth0 = await window.createAuth0Client({
      domain: config.domain,
      client_id: config.client_id,
      audience: config.audience
    });
  } catch (err) {
    console.error(err);
  }
};

export const handleAuth0Callback = async () => {
  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/");
  }
};

export const getUser = async () => {
  if (typeof auth0 === "undefined" || !(await isAuthenticated())) {
    return;
  }

  const token = await auth0.getTokenSilently();
  const auth0UserData = await auth0.getUser();

  // get full user from the backend
  const response = await fetch(backendURL + 'user', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const user = await response.json();

  return {
    ...user,
    token,
    authData: auth0UserData
  };
};

export const login = () => auth0.loginWithRedirect({
  redirect_uri: window.location.origin
});

export const isAuthenticated = async () => {
  return await auth0.isAuthenticated();
};

export const logout = () => auth0.logout({
  returnTo: window.location.origin
});

export const authFlow = async (cb) => {
  await configureClient();
  await handleAuth0Callback();
  if (await isAuthenticated()) {
    cb(await getUser());
  }
};
