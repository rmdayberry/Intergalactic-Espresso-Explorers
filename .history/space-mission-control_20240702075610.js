// Task 1: Declare The Task Array and The Interval ID
let oneTimeTasks = [];
let monitoringTaskId;
// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
  oneTimeTasks.push({ func, delay });
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
  oneTimeTasks.forEach((task) => {
    setTimeout(task.func, task.delay);
  });
}

// Task 4: Start Monitoring Function
function startMonitoring() {
  monitoringTaskId = setInterval(() => {
    console.log("Monitoring space station conditions");
  }, 3000); // every 3000 milliseconds/ 3 seconds
}

// Task 5: Stop Monitoring Function
function stopMonitoring() {
  clearInterval(monitoringTaskId);
  console.log("Stopped monitoring space station conditions");
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
  let countdown = duration;
  let countdownIntervalId = setInterval(() => {
    if (countdown > 0) {
      console.log(`T-minus ${countdown} seconds`);
      countdown--;
    } else {
      clearInterval(countdownIntervalId);
      console.log("Liftoff!");
    }
  }, 1000);
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
  addOneTimeTask(() => {
    console.log("Pre-launch System Check");
  }, 1000);

  addOneTimeTask(() => {
    startMonitoring();
  }, 2000);

  addOneTimeTask(() => {
    stopMonitoring();
  }, 20000);

  // TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
}

scheduleMission(); // Starts the mission.
