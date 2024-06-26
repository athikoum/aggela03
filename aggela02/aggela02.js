/*
 * @name Preload SoundFile
 * @description Call loadSound() during preload() to ensure that the
 * sound is completely loaded before setup() is called. It's best to always
 * call loadSound() in preload(), otherwise sounds won't necessarily be loaded
 * by the time you want to play them in your sketch.
 *
 * <br><br><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * a sound file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em>
 */

let song;
let input;
let analyzer;
let delay;
let fft;
let amp;
let pg;
//let gainSlider
//let volume;

function preload() {
  song = loadSound('data/aggela.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  song.loop(); 
  //song.volume(1);
 //song.volume(1.0);// song is ready to play during setup() because it was loaded during preload
  background(0,0,0);
  
  input = new p5.AudioIn();
  input.start();
  reverb = new p5.Reverb();
  delay = new p5.Delay();
 reverb.process(input, 6, 0.2);
  reverb.amp(0.7);

  delay.process(input, 0.25 ,0.8, 300);
  amp = new p5.Amplitude();
  //delay.amp(8);
  amp.setInput(input);
  

  
  
  //revb.amp(0);
  fft = new p5.FFT(0.0); 
  
//gainSlider = createSlider(-60, 12, 0, 1); //volume slider
  //gainSlider.position(100, 350);


}

function draw() {
  let volume = input.getLevel();
 let threshold = 0.04;
 let col1 = map(volume,0,0.1,0,255);
  song.play();
  if (volume< threshold){ 
    song.pause();}
pg=createGraphics();

let srt1 =' *Headphones/earphones recommended. Clap to begin!* This a story about Aggela the witch , as narrated by Pantelis, Roulas’s husband, in an August night. And the narration begins: Once, I had a terrible pain in my lower back. The pain was not joking, it was getting a toll on me. I was in despair, because I had so much work to do, carrying packages for the shop, working in construction, plus the work in the mastic trees. The doctor told me to take a rest. I laughed at his advice, and left. Then, my mother came up with this idea: “And why aren’t you going to Aggela, our cousin, to enchant the pain?” In the beginning I was hesitant. All those magic things are not of my taste. But in the end, I had nothing to lose. Even if it meant I would go to hell, the pain I was feeling that moment was greater than any torment any hell could cause. I went to her house and told her: “Aggela, devil is living on my waist!” and she told me: “You will stand here, and I will be behind you. When I poke you on the leg, you will say, “what are you doing to me?” Agreed?” This was a shady and uncomfortable place to be in, but I agreed. And she has me standing there, and gently hitting me with a small hammer on my back. And as she is hitting me, she pokes me on the leg. And I ask her :”What are you doing to me?” and she replies “I am taking the meat-biting demon out of you!” So, she was taking out of me the bad spirit that was biting my flesh, and I was in pain. When she finished, she told me “Go rest. Until tomorrow you will be fine”.  I left still being in pain. I went home, boiled a coffee, and the pain was gone. ';
  text(srt1, windowWidth *2.1/4,height/3,800,800,800);
//textSize(12);
  fill(200);
  //let srt2 = 'Clap to begin story';
  //text(srt2, windowWidth*1.1/4,50,300,300);
 textSize(20);
  fill(300,300,300);
  //function volume() { //volume corresponds to the lsider
 // song.volume.value = gainSlider.value();


}
