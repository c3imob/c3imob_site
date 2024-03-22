import NiceSelect from "@/ui/NiceSelect";
import { useAddPropertyContext } from "src/context/AddPropertyProvider/AddPropertyProvider";

 const Overview = () => {
   const { formFunctions } = useAddPropertyContext()
   const {
     register,
     setValue,
     formState: { errors },
   } = formFunctions;

   const selectHandlerCategory = (e: any) => { 
      setValue('category', e.target.value)
   };
   const selectHandlerType = (e: any) => { 
      setValue('typeBusiness', e.target.value)
   };

   return (
      <div className="bg-white card-box border-20">
         <h4 className="dash-title-three">Visão geral</h4>
         <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Título da propiedad</label>
            <input type="text" {...register('title')} name="title" placeholder="O título da propriedade" />
            <p className="form_error">{errors.title?.message}</p>
         </div>
         <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Visão geral*</label>
            <textarea {...register('overview')} name="overview" className="size-lg" placeholder="Escreva sobre imóveis...."></textarea>
            <p className="form_error">{errors.overview?.message}</p>
         </div>
         <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Descrição*</label>
            <textarea {...register('observation')} name="observation" className="size-lg" placeholder="Escreva sobre imóveis...."></textarea>
            <p className="form_error">{errors.observation?.message}</p>
         </div>
         <div className="row align-items-end">
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Categoria*</label>
                  <NiceSelect className="nice-select"
                     options={[
                        { value: "1", text: "Apartments" },
                        { value: "2", text: "Condos" },
                        { value: "3", text: "Houses" },
                        { value: "4", text: "Industrial" },
                        { value: "5", text: "Villas" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandlerCategory}
                     name=""
                     placeholder="" />
                     <p className="form_error">{errors.category?.message}</p>
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Listados em*</label>
                  <NiceSelect className="nice-select"
                     options={[
                        { value: "Venda", text: "Venda" },
                        { value: "Aluguel", text: "Aluguel" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandlerType}
                     name=""
                     placeholder="" />
                     <p className="form_error">{errors.typeBusiness?.message}</p>
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Preço*</label>
                  <input type="number" {...register('price')} name="price"placeholder="Seu preço" />
            <p className="form_error">{errors.price?.message}</p>
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Taxa de imposto anual</label>
                  <input type="text" {...register('annualTax')} name="annualTax" placeholder="IPTU" />
            <p className="form_error">{errors.annualTax?.message}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Overview;
