import React from 'react';

function ZonesInfo() {
  const handleClick = event => {
    event.preventDefault();
    event.target.classList.toggle('active-zone');
    const zoneDetails = event.target.nextElementSibling;
    if (zoneDetails.style.maxHeight) zoneDetails.style.maxHeight = null;
    else zoneDetails.style.maxHeight = zoneDetails.scrollHeight + 'px';
  };

  return (
    <div className="content__zones__info">
      <p>
        Heart rate is useful in because it helps athletes avoid the single most common training mistake:
        pushing too hard in workouts that are supposed to be done at low intensity (Zones 1 and 2).
      </p>
      <div>
        <button type="button" onClick={handleClick} className="collapsible">Zone 1</button>
        <div className="content__zones__info__details">
          <p>
            Zone 1 is a very low intensity. Staying within it usually requires that you actively
            hold yourself back to a pace that’s slower than your natural running pace.
            The common exception is when a Zone 1 recovery jog follows a tiring high-intensity effort.
            The important thing to understand is that it’s almost impossible to go too slow when you’re aiming for Zone 1,
            whereas it’s very easy and all to common to go too fast.
          </p>
        </div>
      </div>
      <div>
        <button type="button" onClick={handleClick} className="collapsible">Zone 2</button>
        <div className="content__zones__info__details">
          <p>
            Zone 2 is fairly broad. You might wonder, “Where exactly within this zone should I be?”
            As a general rule, we encourage runners to go by feel. If you feel strong, run near the top end of Zone 2.
            If you feel tired or sluggish, go ahead and allow yourself to run near the bottom end.
          </p>
        </div>
      </div>
      <div>
        <button type="button" onClick={handleClick} className="collapsible">Zone 3</button>
        <div className="content__zones__info__details">
          <p>
            Zone 3 corresponds to lactate threshold intensity and marks the beginning of “legitimate” moderate to high intensity.
            Thinking in “threshold” terms can help you find this zone and stay in it by feel. The feeling of swimming, riding,
            or running in Zone 3 is often described as “comfortably hard,” or as the fastest speed that still feels relaxed.
            When you perform a Zone 3 effort, imagine there’s a cliff edge in front of you that represents the feeling of strain
            that accompanies faster speeds. Always stay one or two steps back from that precipice when training in Zone 3.
          </p>
        </div>
      </div>
      <div>
        <button type="button" onClick={handleClick} className="collapsible">Zone 4</button>
        <div className="content__zones__info__details">
          <p>
            Zone 4 is the narrowest Zone. Mastering this zone is a matter of connecting the pace and/or heart rate numbers
            that define the zone with what it feels like to run at that pace or heart rate, so that you are able to reliably start
            each Zone 4 effort at the right intensity. If you mess it up the first few times, either going too slow or too fast,
            don’t sweat it. in fact, getting it wrong today is the best way to get it right tomorrow.
          </p>
        </div>
      </div>
      <div>
        <button type="button" onClick={handleClick} className="collapsible">Zone 5</button>
        <div className="content__zones__info__details">
          <p>
            Zone 5 is almost always used in interval workouts similar to the one given as an example earlier in this article.
            This intensity zone ranges from the highest speed you can sustain for a few minutes all the way to a full sprint.
            So how fast should you actually run Zone 5 efforts? Tailor your pace to the specific format of the workout.
            The rule of thumb here is to run closer to the bottom end of Zone 5 when these efforts are longer and to run closer
            to the top end when the intervals are shorter. For example, if a workout asks you to run a bunch of 90-second intervals
            in Zone 5, you’ll want to control your pace so that you are able to run all of the intervals at the same speed without
            slowing down. But if a workout prescribes a set of 20-second intervals, you’ll want to run them as relaxed sprints.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ZonesInfo;
