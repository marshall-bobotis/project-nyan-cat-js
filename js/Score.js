// This class is not used in the project yet.
class Score {
  // The constructor has three parameters. Here is an example of how you would create
  // an instance of this class
  constructor(root) {
    // We create a DOM element, set its CSS attributes then append it to the parent DOM element. We also
    // set the \`domElement\` property of the instance to the newly created DOM element so we can update it later
    this.score = STARTING_SCORE;

    const div = document.createElement('div');

    div.style.position = 'absolute';
    div.style.left = 400;
    div.style.top = 40;
    div.style.color = 'blue';
    div.style.font = 'bold 30px Impact';
    div.style.zIndex = 2000;
    div.innerText = `Score: ${this.score}`;
    root.appendChild(div);

    this.domElement = div;
    console.log('text made');
  }
  // changed update method to an update score method
  scoreIncrease(score) {
    this.score += score;
    this.domElement.innerText = `Your score: ${this.score}`;
  }
}
