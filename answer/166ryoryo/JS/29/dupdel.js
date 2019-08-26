const p = (min, max, n) => {
    const kz = new Array(max - min + 1).fill().map((_, i) => i + min);
    const retu = [];
    // eslint-disable-next-line no-param-reassign
    while (n--) {
      const r = Math.floor(Math.random() * (kz.length + 1)) - 1;
      retu.push(...kz.splice(r, 1));
    }
    return retu;
  };

  const li = p(1, 75, 25);
  li.sort(
    (a,b) => {
      return a - b;
    },
  )

