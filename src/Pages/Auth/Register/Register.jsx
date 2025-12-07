import React from "react";
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth'
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {registerUser, updateUserProfile} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (data) => {
    console.log("After Register", data.photo[0]);
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
    .then(result => {
      console.log(result.user);
      
      //1. store the image in formData
      const formData = new FormData();
      formData.append('image', profileImg)
      
      //2. send the photo to store and get the photoURL
      const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

      axios.post(image_API_URL, formData)
      .then(res => {
        console.log('After image upload', res.data.data.url);
        
        //3. Update user profile to firebase
        const userProfile = {
          displayName: data.name,
          photoURL: res.data.data.url
        }

        updateUserProfile(userProfile)
        .then(() => {
          console.log('User Profile Updated Done.');
          navigate(location?.state || '/')
        })
        .catch(error => {
          console.log(error);
        })
      })

    })
    .catch(error => {
      console.log(error);
    })
  };

  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-3xl text-center">Create an Account</h3>
      <p className="text-center">Register with ZapShift</p>
      
      <form onSubmit={handleSubmit(handleRegister)} className="card-body">
        <fieldset className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required.</p>
          )}
          {/* Photo */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Photo"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500">Photo is required.</p>
          )}
          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required.</p>
          )}
          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or long.
            </p>
          )}
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}
          {errors.password?.type === "pattern" && <p className="text-red-500">Must have at least one uppercase, one lowercase, one number and one special character.</p>}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>Already have an account? <Link state={location.state} className="text-blue-800 underline font-semibold" to="/login">Login</Link></p>
        <SocialLogin></SocialLogin>
      </form>
    </div>
    </div>
  );
};

export default Register;
