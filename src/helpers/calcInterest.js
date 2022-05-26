export const calcInterest = (deposit,contribution,years,rate) => {

  deposit = Number(deposit);
  contribution = Number(contribution);
  years = Number(years);
  rate = Number(rate);
  
  let total = deposit;

  for(let i = 0;i < years; i++){
    total = (total + contribution) * (rate + 1);
  }

  total = new Intl.NumberFormat('us-US',{style: 'currency', currency: 'USD'}).format(total);

  return total;
}