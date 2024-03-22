'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import calculateMonthlyMortgage, { FormMortgageCalculatorData } from 'src/util/functions/calculateMonthlyMortgage';
import { PropertyDetailsAreaDtoInterface } from 'src/components/site/PropertyDetails/PropertyDetailsAreaDTO';

interface MortgageCalculatorInterface {
  property: PropertyDetailsAreaDtoInterface;
}

export const schemaMortgageCalculator = yup.object({
  homePrice: yup.number().required(),
  downPayment: yup.number().required(),
  interestRate: yup.number().required(),
  loanTermYears: yup.number().required(),
});

const MortgageCalculator = ({ property }: MortgageCalculatorInterface) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormMortgageCalculatorData>({ resolver: yupResolver(schemaMortgageCalculator) });

  const [monthlyPayment, setMonthlyPayment] = useState<string>('');

  const submitPayment = (data: FormMortgageCalculatorData) => {
    const monthlyPayment = calculateMonthlyMortgage(data.homePrice, data.downPayment, data.interestRate, data.loanTermYears);
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  useEffect(() => {
    if (property?.id) {
      reset({
        homePrice: Number(property.priceSale.toFixed(2)),
        downPayment: Number((property.priceSale / 80).toFixed(2)),
        interestRate: Number((10).toFixed(2)),
        loanTermYears: 24,
      });
    }
  }, [property?.id]);

  return (
    <form onSubmit={handleSubmit(submitPayment)}>
      <div className="input-box-three mb-25">
        <div className="label">Preço da casa*</div>
        <input type="number" {...register('homePrice')} name="homePrice" step="0.01" placeholder="1,32,789" className="type-input" />
        <p className="form_error">{errors.homePrice?.message}</p>
      </div>
      <div className="input-box-three mb-25">
        <div className="label">Pagamento inicial*</div>
        <input type="number" {...register('downPayment')} name="downPayment" step="0.01" placeholder="$" className="type-input" />
        <p className="form_error">{errors.downPayment?.message}</p>
      </div>
      <div className="input-box-three mb-25">
        <div className="label">Taxa de juro*</div>
        <input type="number" {...register('interestRate')} name="interestRate" step="0.01" placeholder="3.5%" className="type-input" />
        <p className="form_error">{errors.interestRate?.message}</p>
      </div>
      <div className="input-box-three mb-25">
        <div className="label">Termos do empréstimo (anos)*</div>
        <input type="number" {...register('loanTermYears')} name="loanTermYears" step="1" placeholder="24" className="type-input" />
        <p className="form_error">{errors.loanTermYears?.message}</p>
      </div>
      {monthlyPayment && <h6 className="label">Pagamento mensal de hipoteca: R$ {monthlyPayment}</h6>}
      <button onClick={handleSubmit(submitPayment)} className="btn-five text-uppercase sm rounded-3 w-100 mb-10">
        CALCULATE
      </button>
    </form>
  );
};

export default MortgageCalculator;
