import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const serviceCenters = useLoaderData();

  const regionsDeplicate = serviceCenters.map(c => c.region)
  const regions = [...new Set(regionsDeplicate)]
  // console.log(regions);

  const districtsByRegion = region => {
    const regionDistrict = serviceCenters.filter(c => c.region === region)
    const districts = regionDistrict.map(d => d.district)
    return districts
  }
  
  const senderRegion = useWatch({control, name: 'senderRegion'})
  const receiverRegion = useWatch({control, name: 'receiverRegion'})

  const handleSendPercel = (data) => {
    console.log(data);

    const sameDistrict = data.senderDistrict === data.receiverDistrict;
    console.log(sameDistrict);
  };

  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Parcel</h2>
      <form
        onSubmit={handleSubmit(handleSendPercel)}
        className="mt-12 p-4 text-black"
      >
        {/* parcel type */}
        <div>
          <label className="label mr-4 text-black">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            ></input>
            Document
          </label>
          <label className="label text-black">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            ></input>
            Non-Document
          </label>
        </div>

        {/* parcel info: name, weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset text-base font-semibold">
            <label className="label text-black">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full font-normal"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset text-base font-semibold">
            <label className="label text-black">Parcel Weight (kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full font-normal"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          {/* sender details */}
          <div>
            <h4 className="text-2xl font-semibold mb-3">Sender Details</h4>
            <fieldset className="fieldset text-black text-base font-semibold">
              {/* sender name */}
              <label className="label text-black">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                className="input w-full font-normal"
                placeholder="Sender Name"
              />

              {/* sender email */}
              <label className="label mt-4 text-black">Sender email</label>
              <input
                type="email"
                {...register("senderEmail")}
                className="input w-full font-normal"
                placeholder="Sender Email"
              />

              {/* sender region */}
              <fieldset className="fieldset font-normal text-base">
                <legend className="fieldset-legend">Sender Regions</legend>
                <select {...register('senderRegion')} defaultValue="Pick a region" className="select w-full">
                  <option disabled={true}>Pick a region</option>
                  {
                    regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                  }
                </select>
              </fieldset>

              {/* sender districts */}
              <fieldset className="fieldset font-normal text-base">
                <legend className="fieldset-legend">Sender Districts</legend>
                <select {...register('senderDistrict')} defaultValue="Pick a district" className="select w-full">
                  <option disabled={true}>Pick a district</option>
                  {
                    districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                  }
                </select>
              </fieldset>

              {/* sender phone */}
              <label className="label mt-4 text-black">Sender Phone No</label>
              <input
                type="number"
                {...register("senderPhone")}
                className="input w-full font-normal"
                placeholder="Sender Phone"
              />

              {/* sender address */}
              <label className="label mt-4 text-black">Sender Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full font-normal"
                placeholder="Sender Address"
              />
            </fieldset>
          </div>

          {/* reveiver details */}
          <div>
            <h4 className="text-2xl font-semibold mb-3">Receiver Details</h4>
            <fieldset className="fieldset text-base text-black font-semibold">
              {/* Receiver name */}
              <label className="label text-black">Receiver Name</label>
              <input
                type="text"
                {...register("ReceiverName")}
                className="input w-full font-normal"
                placeholder="Receiver Name"
              />

              {/* Receiver email */}
              <label className="label mt-4 text-black">Receiver Email</label>
              <input
                type="email"
                {...register("ReceiverEmail")}
                className="input w-full font-normal"
                placeholder="Receiver Email"
              />

              {/* receiver region */}
              <fieldset className="fieldset text-base">
                <legend className="fieldset-legend">Receiver Regions</legend>
                <select {...register('receiverRegion')} defaultValue="Pick a region" className="select font-normal">
                  <option disabled={true}>Pick a region</option>
                  {
                    regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                  }
                </select>
              </fieldset>

              {/* receiver districts */}
              <fieldset className="fieldset text-base">
                <legend className="fieldset-legend">Receiver Districts</legend>
                <select {...register('receiverDistrict')} defaultValue="Pick a district" className="select font-normal">
                  <option disabled={true}>Pick a district</option>
                  {
                    districtsByRegion(receiverRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                  }
                </select>
              </fieldset>

              {/* Receiver phone */}
              <label className="label mt-4 text-black">Receiver Phone No</label>
              <input
                type="number"
                {...register("ReceiverPhone")}
                className="input w-full font-normal"
                placeholder="Receiver Phone"
              />

              {/* Receiver address */}
              <label className="label mt-4 text-black">Receiver Address</label>
              <input
                type="text"
                {...register("ReceiverAddress")}
                className="input w-full font-normal"
                placeholder="Receiver Address"
              />
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary mt-8 text-black"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
