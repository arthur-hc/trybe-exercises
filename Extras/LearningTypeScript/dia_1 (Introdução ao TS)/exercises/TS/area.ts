export let convert = (value: number, unitBase: string, unit: string): string => {
  let metrics: { 
    [key: string]: number
  } = {
    "km²": 1000,
    "hm²": 100,
    "dam²": 10,
    "m²": 1,
    "dm²": 0.1,
    "cm²": 0.01,
    "mm²": 0.001,
  }

  if (!(unit in metrics)) {
    throw new Error("Invalid metric");
  }
  return `${(value * metrics[unitBase]) / metrics[unit]} ${unit}`
}
