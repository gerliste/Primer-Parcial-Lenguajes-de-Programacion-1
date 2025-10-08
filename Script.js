// leer el json
fetch('series (1).json')
  .then(res => res.json())
  .then(series => {

    // 1. series estrenadas entre 2005 y 2013
    let entre2005y2013 = series.filter(s =>
      s.premiered && Number(s.premiered.slice(0,4)) > 2005 && Number(s.premiered.slice(0,4)) <= 2013
    );
    console.log("1. Series estrenadas entre 2005 y 2013, cuya fecha de estreno fue posterior al año 2005:");
    entre2005y2013.forEach(s => console.log(" -", s.name));


    // 2. en emisión que contengan 'the' en el título y menos de 25 caracteres
    let enEmision = series.filter(s =>
      s.status === "Running" &&
      s.name.toLowerCase().includes("the") &&
      s.name.length <= 25
    );
    console.log("2. Series en emisión con la palabra 'the' y título menor a 25 letras:");
    enEmision.forEach(s => console.log(" -", s.name));


    // 3. canceladas que contengan 'good' y título menor a 30 letras
    let canceladas = series.filter(s =>
      s.status === "Ended" &&
      s.name.toLowerCase().includes("good") &&
      s.name.length <= 30
    );
    console.log("3. Series terminadas con la palabra 'good' en el titulo y longitud menor a 30 letras:");
    canceladas.forEach(s => console.log(" -", s.name));


    // 4. duración entre 20 y 50 minutos del año 2005
    let duracion20a50_2005 = series.filter(s =>
      s.runtime && s.runtime >= 20 && s.runtime <= 50 &&
      s.premiered && Number(s.premiered.slice(0,4)) === 2005
    );
    console.log("4. Series de 20 a 50 min estrenadas en 2005:");
    duracion20a50_2005.forEach(s => console.log(" -", s.name));

    
    // 5. duración mayor a 50 minutos del año 2008
    let duracionMayor50_2008 = series.filter(s =>
      s.runtime && s.runtime > 50 &&
      s.premiered && Number(s.premiered.slice(0,4)) === 2008
    );
    console.log("5. series con más de 50 min del 2008:");
    duracionMayor50_2008.forEach(s => console.log(" -", s.name));

  })
