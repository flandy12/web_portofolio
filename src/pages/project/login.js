import { useState } from "react";

const { default: LayoutsPage } = require("../layouts")

const LoginPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });

    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) newErrors.email = 'Email is required.';
        if (!formData.password.trim()) newErrors.password = 'Password is required.';
        return newErrors;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
          setSubmittedData(formData);
          setFormData({ name: '', email: '', password: '' }); // Reset form
          setErrors({});

          alert('Selamat '+ formData.name + ' Datang Di Universitas Unpam');
        }
      };


   return (
    <LayoutsPage>
    <div class=" min-h-screen flex items-center justify-center bg-default py-20">
        <div class="w-full max-w-md mx-auto space-y-6 border p-5 bg-white shadow rounded-lg">
            <div class="hidden" id="login">
                <div class="flex justify-center space-x-2 mb-6">
                    <img src="/public/logo/sasmita.png" alt="logo" class="w-12" />
                    <img src="/public/logo/logo.png" alt="logo" class="w-12" />
                </div>
                <h2 class="text-center text-2xl font-bold mb-4">Sign in with email</h2>
                <p class="text-center text-gray-600 mb-6">
                    Make a new doc to bring your words, data, and teams together. For free
                </p>
                <div class="space-y-4">
                    <div class="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-4 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                        </svg>
                        <input type="email" placeholder="Email" class="w-full bg-transparent focus:outline-none" />
                    </div>
                    <div class="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 448 512">
                            <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
                        </svg>
                        <input type="password" placeholder="Password" id="password-login" class="w-full bg-transparent focus:outline-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 absolute right-4 text-gray-600 cursor-pointer" viewBox="0 0 576 512" fill="currentColor">
                            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                        </svg>
                    </div>
                </div>
                <button class="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600">Get Started</button>
                <p class="text-center text-gray-600 mt-4">Or sign in with</p>
                <div class="flex justify-center space-x-4 mt-4">
                
                </div>
                <p class="text-center text-gray-600 mt-4">Don't have an account? <b class="text-blue-500 cursor-pointer">Sign Up</b></p>
            </div>

            <div class="block" id="register">
                <div class="flex justify-center space-x-2 mb-6">
                    <img src="/images/sasmita.png" alt="logo" class="w-12"/>
                    <img src="/images/logo.png" alt="logo" class="w-12"/>
                </div>
                <h2 class="text-center text-2xl font-bold mb-4 text-black">Register with email</h2>
                <p class="text-center text-gray-600 mb-6">
                    Create an account to join the Unpam Universitas
                </p>
                <div class="space-y-4">
                   <form onSubmit={handleSubmit} >
                   <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white" id="username"  value={formData.name}
                      onChange={handleChange} type="text" placeholder="Username"/>
                      {errors.name && (
                            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                        )}
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
                        Email
                    </label>
                    <input name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white" id="email" value={formData.email}
                     onChange={handleChange} type="email" placeholder="Email"/>
                      {errors.email && (
                            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white" id="password"  value={formData.password}
                    onChange={handleChange}  type="password" placeholder="******************"/>
                    {errors.password && (
                        <p className="text-sm text-red-500 mt-1">{errors.password}</p>
                    )}
                   
                    </div>
                    <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600">Sign Up</button>
                   </form>
                </div>
               
                <p class="text-center text-gray-600 mt-4">Or sign up with</p>
                <div class="flex justify-center space-x-4 mt-4">

                </div>
                <p class="text-center text-gray-600 mt-4">Already have an account? <b class="text-blue-500 cursor-pointer">Sign in</b></p>
            </div>
        </div>
    </div>
</LayoutsPage>
   )
}

export default LoginPage;