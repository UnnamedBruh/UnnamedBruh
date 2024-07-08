const synthA = new Tone.FMSynth().toDestination();
const synthB = new Tone.AMSynth().toDestination();
const synthC = new Tone.Synth().toDestination();
const synthD = new Tone.FMSynth().toDestination();
const loopA = new Tone.Loop((time) => synthA.triggerAttackRelease("C2", "8n", time), "4n").start(0);
const loopB = new Tone.Loop((time) => {
	synthB.triggerAttackRelease("C4", "8n", time);
}, "4n").start(0);
const loopC = new Tone.Loop((time) => {
	synthC.triggerAttackRelease("C3", "8n", time);
}, "4n").start(0);
const loopD = new Tone.Loop((time) => {
	synthD.triggerAttackRelease("C5", "8n", time);
}, "4n").start(0);
Tone.getTransport().start();
Tone.getTransport().bpm.rampTo(2000, 1);
