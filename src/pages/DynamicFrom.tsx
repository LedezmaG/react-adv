import { Form, Formik } from 'formik'
import { MyTextInput } from '../components';
import formDy from '../data/custom-form.json'
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const rulesFields: { [key: string]: any } = {};

for (const input of formDy) {
    initialValues[ input.name ] = input.value

    if (!input.validations) continue;

    let schema = Yup.string()

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required(rule.msg)
        }
        if (rule.type === 'min') {
            schema = schema.min((rule as any).value || 1, rule.msg)
        }
        if (rule.type === 'email') {
            schema = schema.email(rule.msg)
        }
    }

    rulesFields[ input.name ] = schema;
}

const validationSchema = Yup.object({...rulesFields})

export const DynamicFrom = () => {
    
    return (
        <div>
            <h1>
                DynamicFrom
                </h1>
            <Formik
                initialValues={ initialValues }
                validationSchema={ validationSchema }
                onSubmit={(values)=> {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form>
                        {formDy.map(({name, label, type, placeholder, optiopn})=>{

                            if (type === 'input' || type === 'password' || type === 'email') {
                                return <MyTextInput 
                                    key={name}
                                    name={name}
                                    label={label}
                                    type={type as any}
                                    placeholder={placeholder}
                                />
                            } else if (type === 'select') {
                                return <MySelect 
                                    key={name}
                                    name={name}
                                    label={label}
                                    type={type as any}
                                    
                                >
                                    <option value="">Select an option</option>
                                    {optiopn?.map( ({id, label}) => <option key={id} value={id}>{label}</option>)}
                                </MySelect>
                            }
                            <span>tipo no soportado</span>
                        })}
                        <button type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
