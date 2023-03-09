import { useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MyTextInput } from '../components';

import '../styles/styles.css';
import { MySelect } from '../components/MySelect';
import { MyInputPass } from '../components/MyInputPass';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Page</h1>
            <Formik
                initialValues={
                    {
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        passwordRep: ''
                    }
                }
                onSubmit={ ( values ) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .min(2, 'Debe de tener un minimo de 2 caracteres')
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
                        lastName: Yup.string()
                            .min(2, 'Debe de tener un minimo de 2 caracteres')
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('El correo no tiene un formato válido')
                            .required('Requerido'),
                        password: Yup.string()
                            .min(2, 'Debe de tener un minimo de 2 caracteres')
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
                        passwordRep: Yup.string()
                            .oneOf([Yup.ref('password')], "El password no son iguales")
                            .required('Requerido'),
                    })
                }
            >
                {(formik) => (
                    <Form>
                        <MyTextInput
                            label="First Name"
                            name="firstName" 
                            placeholder="Fernando"
                        />
                        <MyTextInput
                            label="Last Name"
                            name="lastName" 
                            placeholder="Lara"
                        />
                        <MyTextInput
                            label="Email"
                            name="email" 
                            placeholder="example@email.com"
                        />
                        <MyInputPass
                            label="Password"
                            name="password" 
                            placeholder="example@email.com"
                        />
                        <MyInputPass
                            label="Repeat password"
                            name="passwordRep" 
                            placeholder="example@email.com"
                        />
                        <button type="submit">Submit</button>
                        <button onClick={ e => formik.resetForm()}>Reset</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
