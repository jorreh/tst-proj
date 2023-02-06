let startVal = 0;

startScript = () => {
  console.log("start hello");

  for (let i = 0; i < 5; i++) {
    startVal++;
    // some mistake
  }

  console.log("end");
};

startScript();
