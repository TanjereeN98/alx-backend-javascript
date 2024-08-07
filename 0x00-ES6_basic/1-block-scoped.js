export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var innerTask = true;  // Renamed variable to avoid overwriting
    var innerTask2 = false;  // Renamed variable to avoid overwriting
  }

  // The outer variables `task` and `task2` are unaffected by the block scope changes
  return [task, task2];
}
