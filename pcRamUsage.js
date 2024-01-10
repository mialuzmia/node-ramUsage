import os from 'os';

let stats = {}

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os;
  const tRam = parseInt(totalmem() / 1024 / 1024);
  const fRam = parseInt(freemem() / 1024 / 1024);
  const usage = 100 - ((fRam / tRam) * 100);
  
  stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: `${tRam} MB`,
    FreeRAM: `${fRam} MB`,
    Usage: `${usage.toFixed(2)}%`,
  };

  // console.clear();
  // console.table(stats);


}, 1000);

export { stats };
