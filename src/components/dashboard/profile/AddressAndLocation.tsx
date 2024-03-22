import NiceSelect from '@/ui/NiceSelect';
import CEPInput from 'src/ui/CEPInput';
import { ChangeEvent, useState } from 'react';
import { getAddressByCep } from 'src/services/login-services';
import { useAddPropertyContext } from 'src/context/AddPropertyProvider/AddPropertyProvider';

const AddressAndLocation = () => {
  const { formFunctions } = useAddPropertyContext();
  const { register, setValue, formState: { errors } } = formFunctions;

  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue('state', event.target?.value);
    setState(event.target?.value);
  };
  const [cep, setCep] = useState('');
  const [state, setState] = useState('');

  const handleCepChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedValue = value.replace(/\D/g, '').substring(0, 8);
    setCep(formattedValue);

    if (formattedValue.length === 8) {
      const addressData = await getAddressByCep(formattedValue);
      if (addressData) {
        if (addressData.logradouro) {
          setValue('address', addressData.logradouro);
        }
        if (addressData.localidade) {
          setValue('city', addressData.localidade);
        }
        if (addressData.uf) {
          setValue('state', addressData.uf);
          setState(addressData.uf);
        }
        if (addressData.bairro) {
          setValue('neighborhood', addressData.bairro);
        }
      }
    }
  };

  return (
    <div className="bg-white card-box border-20 mt-40">
      <h4 className="dash-title-three">Endereço e localização</h4>
      <div className="row">
        <div className="col-lg-3">
          <div className="dash-input-wrapper mb-25">
            <label htmlFor="">CEP</label>
            <CEPInput value={cep} onChange={handleCepChange} />
            <p className="form_error">{errors.zipCode?.message}</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="dash-input-wrapper mb-25">
            <label htmlFor="">Estado*</label>
            <NiceSelect
              className="nice-select"
              options={[
                { value: 'SP', text: 'São Paulo' },
                { value: 'AC', text: 'Acre' },
                { value: 'AL', text: 'Alagoas' },
                { value: 'AP', text: 'Amapá' },
                { value: 'AM', text: 'Amazonas' },
                { value: 'BA', text: 'Bahia' },
                { value: 'CE', text: 'Ceará' },
                { value: 'DF', text: 'Distrito Federal' },
                { value: 'ES', text: 'Espírito Santo' },
                { value: 'GO', text: 'Goiás' },
                { value: 'MA', text: 'Maranhão' },
                { value: 'MT', text: 'Mato Grosso' },
                { value: 'MS', text: 'Mato Grosso do Sul' },
                { value: 'MG', text: 'Minas Gerais' },
                { value: 'PA', text: 'Pará' },
                { value: 'PB', text: 'Paraíba' },
                { value: 'PR', text: 'Paraná' },
                { value: 'PE', text: 'Pernambuco' },
                { value: 'PI', text: 'Piauí' },
                { value: 'RJ', text: 'Rio de Janeiro' },
                { value: 'RN', text: 'Rio Grande do Norte' },
                { value: 'RS', text: 'Rio Grande do Sul' },
                { value: 'RO', text: 'Rondônia' },
                { value: 'RR', text: 'Roraima' },
                { value: 'SC', text: 'Santa Catarina' },
                { value: 'SE', text: 'Sergipe' },
                { value: 'TO', text: 'Tocantins' },
              ]}
              defaultCurrent={0}
              value={state}
              onChange={selectHandler}
              name=""
              placeholder=""
            />
            <p className="form_error">{errors.state?.message}</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="dash-input-wrapper mb-25">
            <label htmlFor="">Cidade</label>
            <input type="text" {...register('city')} name="city" placeholder="" />
            <p className="form_error">{errors.city?.message}</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="dash-input-wrapper mb-25">
            <label htmlFor="">Bairro</label>
            <input type="text" {...register('neighborhood')} name="neighborhood" placeholder="" />
            <p className="form_error">{errors.neighborhood?.message}</p>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="dash-input-wrapper mb-25">
          <label htmlFor="">Endereço</label>
          <input type="text" {...register('address')} name="address" placeholder="" />
          <p className="form_error">{errors.address?.message}</p>
        </div>
      </div>
      <div className="col-12">
        <div className="dash-input-wrapper mb-25">
          <label htmlFor="">Complemento</label>
          <div className="position-relative">
            <input type="text" {...register('complement')} name="complement" placeholder="" />
            <p className="form_error">{errors.complement?.message}</p>
          </div>
        </div>
        {/* <div className="col-12">
          <div className="map-frame mt-30">
            <div className="gmap_canvas h-100 w-100">  
            <iframe className="gmap_iframe h-100 w-100" src={""}></iframe>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
//Get e iframe of google map search by brazilan CEP
// Create and input with the mask of the Brazilian CEP
export default AddressAndLocation;
