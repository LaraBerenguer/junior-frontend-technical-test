import RegistrationForm from "../components/RegistrationForm";

const FormPage = () => {    

    return (
        <section id="form-page">
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Register</h2>                
            </div>    
            <RegistrationForm />       
        </section>
    )
};

export default FormPage;