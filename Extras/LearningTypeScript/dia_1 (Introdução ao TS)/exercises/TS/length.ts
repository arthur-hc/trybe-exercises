export let convert = (value: number, unitBase: string, unit: string): string => {
  let metrics: { 
    [key: string]: number
    // km: number;
    // hm: number;
    // dam: number;
    // m: number;
    // dm: number;
    // cm: number;
    // mm: number;
  } = {
    km: 1000,
    hm: 100,
    dam: 10,
    m: 1,
    dm: 0.1,
    cm: 0.01,
    mm: 0.001,
  }
  if (!(unit in metrics)) {
    throw new Error("Invalid metric");
  }
  return `${(value * metrics[unitBase]) / metrics[unit]} ${unit}`
}
