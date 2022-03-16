export let convert = (value: number, unitBase: string, unit: string): string => {
  let metrics: { 
    [key: string]: number
  } = {
    kg: 1000,
    hg: 100,
    dag: 10,
    g: 1,
    dg: 0.1,
    cg: 0.01,
    mg: 0.001,
  }
  if (!(unit in metrics)) {
    throw new Error("Invalid metric");
  }
  return `${(value * metrics[unitBase]) / metrics[unit]} ${unit}`
}
