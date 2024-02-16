import React from 'react'

const Formfield = ({
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isSurpriseMe,
    handleSurpriseMe,
  }) =>{ return (
    <div>
      <div className="flex items-center gap-4 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-white">
          {labelName}
        </label>
        <input
        type={type}
        id={name}
        name={name}
        className="bg-gray-300 border border-gray-200 text-black text-sm rounded-lg focus:ring-[#0f15c3] focus:border-[#101385] outline-none block w-full p-4"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-sm bg-[#59bee9] py-2 px-20 rounded-[5px] text-black">
            Surprise me
          </button>
        )}
      </div>
      
    </div>
  );
};


export default Formfield
