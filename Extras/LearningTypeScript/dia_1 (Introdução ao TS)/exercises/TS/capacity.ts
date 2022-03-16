export let convert = (value: number, unitBase: string, unit: string): string => {
  let metrics: { 
    [key: string]: number
  } = {
    kl: 1000,
    hl: 100,
    dal: 10,
    l: 1,
    dl: 0.1,
    cl: 0.01,
    ml: 0.001,
  }
  if (!(unit in metrics)) {
    throw new Error("Invalid metric");
  }
  return `${(value * metrics[unitBase]) / metrics[unit]} ${unit}`
}
