export const zoneTableInfos = [
  {
    effort: 'Very light, 50-60%',
    effect: 'Healthy Heart Zone'
  },
  {
    effort: 'Light, 60-70%',
    effect: 'Temperate Zone'
  },
  {
    effort: 'Moderate, 70-80%',
    effect: 'Aerobic Zone'
  },
  {
    effort: 'Hard, 80-90%',
    effect: 'Threshold Zone'
  },
  {
    effort: 'Very hard, 90-100%',
    effect: 'Perfomance Redline Zone'
  },
];

export const zoneDescriptions = [
  {
    number: 'Zone 1',
    description: 'Zone 1 is a very low intensity. Staying within it usually requires that you actively hold yourself back to a pace that’s slower than your natural running pace. The common exception is when a Zone 1 recovery jog follows a tiring high-intensity effort. The important thing to understand is that it’s almost impossible to go too slow when you’re aiming for Zone 1, whereas it’s very easy and all to common to go too fast.'
  },
  {
    number: 'Zone 2',
    description: 'Zone 2 is fairly broad. You might wonder, “Where exactly within this zone should I be?” As a general rule, we encourage runners to go by feel. If you feel strong, run near the top end of Zone 2. If you feel tired or sluggish, go ahead and allow yourself to run near the bottom end.'
  },
  {
    number: 'Zone 3',
    description: 'Zone 3 corresponds to lactate threshold intensity and marks the beginning of “legitimate” moderate to high intensity. Thinking in “threshold” terms can help you find this zone and stay in it by feel. The feeling of swimming, riding, or running in Zone 3 is often described as “comfortably hard,” or as the fastest speed that still feels relaxed. When you perform a Zone 3 effort, imagine there’s a cliff edge in front of you that represents the feeling of strain that accompanies faster speeds. Always stay one or two steps back from that precipice when training in Zone 3.'
  },
  {
    number: 'Zone 4',
    description: 'Zone 4 is the narrowest Zone. Mastering this zone is a matter of connecting the pace and/or heart rate numbers that define the zone with what it feels like to run at that pace or heart rate, so that you are able to reliably start each Zone 4 effort at the right intensity. If you mess it up the first few times, either going too slow or too fast, don’t sweat it. in fact, getting it wrong today is the best way to get it right tomorrow.'
  },
  {
    number: 'Zone 5',
    description: 'Zone 5 is almost always used in interval workouts similar to the one given as an example earlier in this article. This intensity zone ranges from the highest speed you can sustain for a few minutes all the way to a full sprint. So how fast should you actually run Zone 5 efforts? Tailor your pace to the specific format of the workout. The rule of thumb here is to run closer to the bottom end of Zone 5 when these efforts are longer and to run closer to the top end when the intervals are shorter. For example, if a workout asks you to run a bunch of 90-second intervals in Zone 5, you’ll want to control your pace so that you are able to run all of the intervals at the same speed without slowing down. But if a workout prescribes a set of 20-second intervals, you’ll want to run them as relaxed sprints.'
  },
];

export const trainingDescriptions = [
  {
    trainingType: 'Recovery (R)',
    description: 'Take advantage of this day with active recovery. Avoid even Zone 2.'
  },
  {
    trainingType: 'Foundation (F)',
    description: 'Discipline is required for the running foundation set. If rested, the temptation is to drift into Zone X. However, save your energy for the 20% of the 80/20 plan, and stay in Zone 1-2 for this workout. Avoid running with individuals who will tempt you to exceed Zone 2.'
  },
  {
    trainingType: 'Long (L)',
    description: 'Similar to the frequent Run Foundation workout, the Long Run is measured by distance to ensure the athlete experiences the required stress. Upper Zone 2 is recommended. Half and full marathon athletes may benefit from a rare Zone X exception and spend a majority of their time in Zone X for this workout. Every effort should be made to “negative split” the workout, where the second half of the run is slightly faster than the first half. Complete this workout by distance only, any planned time associated with this workout is a broad estimate.'
  },
  {
    trainingType: 'Fast Finish (FF)',
    description: 'One of the few workouts designed with the intensity scheduled for the end of the workout, the intent is to expose the athlete to high intensity while slightly fatigued. An excellent simulation of a triathlon finish.'
  },
  {
    trainingType: 'Tempo (T)',
    description: 'The running tempo workout does an excellent job at muscular endurance, and should be used as a method to either verify or re-establish current HR Zones. A difficult workout, pacing is key. Start slightly lower and finish stronger. Some brief forays into Zone 4 are acceptable.'
  },
  {
    trainingType: 'Cruise Intervals (CI)',
    description: 'Muscular endurance is arguably the most important ability an endurance athlete can develop, and no other interval improves muscular endurance better than the cruise interval. The application of the cruise interval is broad. The only interval type appropriate for both the General and Specific phase of training, its benefit spans all triathlon distances. The 80/20 principle makes the cruise interval possible, by ensuring the athlete is sufficiently rested in order to achieve the required Zone 3 intensity. The cruise interval is the antithesis of Zone X. A successful cruise interval set has the output for each interval nearly identical to the previous, while maintaining solid Zone 3 intensity. Consider reducing the rest time from 3 minutes to 2 minutes and then 2 minutes to 1 minute if previous cruise intervals sets have been successful.'
  },
  {
    trainingType: 'Long with Speed Play (LSP)',
    description: 'A successful execution of this workout would have the pace of the Zone 3 intervals remain steady or slightly increase throughout the activity. You may be cursing Matt and David by the end of the intervals, but you’ll be praising them on race day. Complete this workout by distance only, any planned time associated with this workout is a broad estimate.'
  },
  {
    trainingType: 'Long with Fast Finish (LFF)',
    description: 'This workout is designed to teach the athlete’s body and brain to resist and manage fatigue, placing the most stress at the very end of the workout. Half and full marathon athletes may benefit from a rare Zone X exception and replace some of the Zone 2 time with Zone X. Complete this workout by distance only, any planned time associated with this workout is a broad estimate.'
  },
  {
    trainingType: 'Speed Play (SP)',
    description: 'Not to be confused with the Zone 5 running short interval (RSI), running speed play is done in Zone 4 with much shorter recoveries. If done in Zone 5, the athlete will fade.'
  },
  {
    trainingType: 'Hill Repeats (HR)',
    description: 'Because the run hill repeats are so short, the athlete will have to often use perceived effort to gauge intensity, as HR may not reach Zone 5 prior to the interval ending. This workout is an excellent time to go very hard, but aim to have each interval with a similar output and avoid fading near the end of the interval. If hills are unavailable, a treadmill is recommended. If neither option is available, the prescribed intensity and duration can still be met.'
  },
  {
    trainingType: 'Short Intervals (SI)',
    description: 'Unlike the very similar running hill repeats (RHR) the running short interval is done on a flat surface. Feel free to go hard.'
  },
  {
    trainingType: 'Long Intervals (LI)',
    description: 'Highly intense and rarely used, these heavy Zone 4 intervals mimic their fraternal twin, the anaerobic intervals (code RAn). The extended Zone 4 duration and reduced recovery interval reserve this workout for advanced athletes.'
  },
  {
    trainingType: 'Mixed Intervals (MI)',
    description: 'Complex in execution, the reward is high. This workout is best done pre-programmed into a watch (such as a Garmin).'
  },
  {
    trainingType: 'Cross-training (CT)',
    description: 'To performing cross-training on the days the plan offers cross-training, you may replace scheduled runs with cross-training sessions whenever pain or soreness makes running inadvisable. When you do, simply match the duration, intensity, and structure of the run in your chosen cross-training activity. For example, if the run workout prescribes 3 x (3 minutes Zone 3 / 3 minutes rest), this can be done via heart rate zones or perceived effort on a bike, or in any other legs-dominant nonimpact aerobic modality.'
  },
  {
    trainingType: 'Rest',
    description: 'Athletes can consider adding a strength workout to this day, and beginner swimmers can consider adding a swim. However, rest is a critical element of improving fitness. Adding activity to this rest day is a high risk decision. Very few athletes, of any ability level, can maintain a 16+ week training program without regular days off.'
  }
];
