import { useState } from "react";
import { registerAttendee } from "../api";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", role: "" });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [confirmation, setConfirmation] = useState(null);

    const roles = ["Student", "Junior", "Mid", "Senior"];

    //validation
    const validateForm = () => {
        const newErrors = {};
        let isValid = true; 

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        if (!formData.role) {
            newErrors.role = "Role is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        //clean error when typing again
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsLoading(true);
        setConfirmation(null);

        try {
            const result = await registerAttendee(formData);
            setConfirmation(result);

            //Reset form on success
            if (result.ok) {
                setFormData({ name: "", email: "", role: "" });
            }
        } catch (error) {
            setConfirmation({ok: false, error: "There's an error on out part. Please try again"});
        }
        setIsLoading(false);
    };

    return (
        <div className="max-w-80">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">                
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="Grace Hopper"
                    />
                    {errors.name && <p className="text-red-500 text-sm my-1">{errors.name}</p>}
                </div>                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="grace@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm my-1">{errors.email}</p>}
                </div>                
                <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                        Role *
                    </label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-lg ${errors.role ? 'border-red-500' : 'border-gray-300'
                            }`}
                    >
                        <option value="">Select...</option>
                        {roles.map(role => 
                            <option key={role} value={role}>{role}</option>
                        )}
                    </select>
                    {errors.role && <p className="text-red-500 text-sm my-1">{errors.role}</p>}
                </div>                
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${isLoading
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-primary hover:bg-black'
                        }`}
                >
                    {isLoading ? "Registering..." : "Register"}
                </button>
            </form>
            {/* Confirm register */}
            {confirmation && (
                <div className={`my-4 p-4 rounded-lg ${confirmation.ok
                        ? 'bg-green-100 border border-green-400 text-green-700'
                        : 'bg-red-100 border border-red-400 text-red-700'
                    }`}>
                    {confirmation.ok ? (
                        <div>
                            <h3 className="font-semibold">Registration Successful!</h3>
                            <p>Your registration ID is <span className="font-bold">{confirmation.registrationId}</span></p>
                        </div>
                    ) : (
                        <div>
                            <h3 className="font-semibold">Registration Failed</h3>
                            <p>{confirmation.error}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;