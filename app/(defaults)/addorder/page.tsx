"use client";
import IconArrowBackward from "@/components/icon/icon-arrow-backward";
import PanelCodeHighlight from "@/components/panel-code-highlight";
import { Metadata } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import "flatpickr/dist/flatpickr.css";
import Image from "next/image";
import { IRootState } from "@/store";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useDispatch, useSelector } from "react-redux";

const Basic = () => {
  const [mainImage, setMainImage] = useState("/assets/images/no-avatar.png");
  const reasons = [
    "gift",
    "shopping",
    "professional fee",
    "cost for student",
    "Family support",
    "loan repayment",
    "commision",
    "deposit for land purpose",
    "set up business",
    "Buy property",
    "a loan to buy house",
    "saleing own property",
    "consulting fee",
    "wedding",
    "freelancer",
    "donation to pay a teacher",
    "donation to school",
    "family gift",
    "personal",
  ];
  const [date1, setDate1] = useState<any>("2022-07-05");
  const [customerData, setCustomerData] = useState([]);
  const [customerDatabyid, setCustomerDatabyid] = useState([]);
  const [options, setOptions] = useState([]);
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ];

  const sourceoffunds = [
    "Personal savings",
    "family gift",
    "Property sale",
    "Business cost",
    "Trade between Remittances",
    "Donations",
    "Business",
  ];
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [formData, setFormData] = useState({
    AMLstatus: " ",
    tags: " ",
    customer: " ",
    reasonfortransfer: " ",
    foreigncurrency: " ",
    country: " ",
    sourceoffunds: " ",

  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      foreigncurrency: "AUD Australian currency",
    }));
  }, []);
  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch("/api/customer"); // Assuming API endpoint is relative
        if (!response.ok) {
          throw new Error("Failed to fetch customer data");
        }
        const data = await response.json();
        const custval = data.customer;
        setCustomerData(data.customer);

        const option = custval.map((customer:any) => ({
          value: customer._id,
          label: `${customer.firstName} ${
            customer.middleName ? customer.middleName + " " : ""
          }${customer.lastName} - ${customer.mobile}`,
        }));

        setOptions(option);
      } catch (error) {}
    };

    fetchCustomerData();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleAddCustomerClick = (e:any) => {
    e.stopPropagation();
    setShowAddCustomer(!showAddCustomer); // Toggle the visibility
  };

  const getCustomerbyid = (val: any) => {
    const fetchCustomerDatabyid = async () => {
      try {
        const response = await fetch(`/api/customer?id=${val}`); // Assuming API endpoint is relative
        if (!response.ok) {
          throw new Error("Failed to fetch customer data");
        }
        const data = await response.json();
        const custval = data.customer;
        setCustomerDatabyid(custval);
      } catch (error) {}
    };

    fetchCustomerDatabyid();
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();



    try {
      const res = await fetch("http://localhost:3000/api/order", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
      } else {
        throw new Error("Failed to create order");
      }
    } catch (error) {
      console.log(error);
    }

        };
    return (
     <div>
       <div className="flex">
        <div className="w-1/2">
          <div className="mb-5">
            <div className="w-100 my-2 mr-4 rounded-lg border border-gray-300 p-4">
              <form className="space-y-5" onSubmit={handleFormSubmit}>
                <div className="mb-2 mt-[-30px]">
                  <Tippy content="Basic Information" placement="top">
                    <button type="button" className="btn btn-dark">
                      Basic Information
                    </button>
                  </Tippy>
                </div>
                <div className="flex">
                  {" "}
                  <label>AML Status</label>
                  <div className="ml-4 flex gap-2">
                    <div>
                      <label className="flex cursor-pointer items-center">
                        <input
                          type="radio"
                          name="AMLstatus"
                          value={formData.AMLstatus}
                          className="form-radio"
                          defaultChecked
                        />
                        <span className="text-white-dark">Required</span>
                      </label>
                    </div>

                    <div>
                      <label className="flex cursor-pointer items-center">
                        <input
                          type="radio"
                          name="AML_status"
                          className="form-radio"
                        />
                        <span className="text-white-dark">Not Required</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="groupLname">Order Date</label>
                  <Flatpickr
                    name="dob"
                    value={date1}
                    options={{ dateFormat: "Y-m-d" }}
                    className="form-input"
                    onChange={(date) => setDate1(date)}
                  />
                </div>

                <div>
                  <label htmlFor="ctnSelect1">Tags</label>
                  <select
                    className="form-select text-white-dark"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                  >
                    <option>IR-001 - Iran-AHMADI</option>
                    <option>
                      ETEMAD SA BRANCH - ETEMAD FIANCIAL SERVICES PTY
                      LTD-ADELAID BRANCH
                    </option>
                    <option>UAE-AHMADI AHMADI-UAE-BRANCH</option>
                    <option>PAK_ETEMAD - Pakistan-AHMADI</option>
                    <option>
                      ETEMAD WA BRANCH - ETEMAD FIANCIAL SERVICES PTY LTD -
                      PERTH BRANCH
                    </option>
                    <option>AF-KABUL-2 - KABUL-AHMADI</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="ctnSelect1">Customer</label>
                  <div className="flex">
                    <div className="w-11/12">
                      <Select
                        placeholder="Select a Customer"
                        name="customer"
                        value={formData.customer}
                        options={options}
                        onChange={(t) => {
                          getCustomerbyid(t.value);
                        }}
                      />
                    </div>
                    <div className="flex w-1/12 items-center justify-center">
                      <button onClick={handleAddCustomerClick}>
                        <svg
                          className="h-8 w-8 text-gray-500"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <line x1={12} y1={5} x2={12} y2={19} />{" "}
                          <line x1={16} y1={15} x2={12} y2={19} />{" "}
                          <line x1={8} y1={15} x2={12} y2={19} />
                        </svg>
                      </button>{" "}
                    </div>
                    {showAddCustomer && (
                      <div className="w-45 absolute mt-10 border border-gray-200 bg-white p-4">
                        <Link href={"/addcustomer"}>
                          {" "}
                          <div className="flex">
                            <div>
                              <svg
                                className="h-6 w-6 text-gray-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                {" "}
                                <line x1={12} y1={5} x2={12} y2={19} />{" "}
                                <line x1={5} y1={12} x2={19} y2={12} />
                              </svg>
                            </div>
                            <div>
                              {" "}
                              <p>Add Customer</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="groupLname">Reason for transfer</label>
                  <select
                    id="ctnSelect2"
                    name="reasonfortransfer"
                    value={formData.reasonfortransfer}
                    className="form-select text-white-dark"
                    required
                    onChange={handleChange}
                  >
                    <option value="">Select reason</option>
                    {reasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="ctnSelect1">Foreign currency</label>
                  <select
                    className="form-select text-white-dark"
                    name="foreigncurrency"
                    value={formData.foreigncurrency}
                    onChange={handleChange}
                  >
                    <option>AUD Australian currency</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="groupLname">Country</label>
                  <select
                    id="ctnSelect2"
                    name="country"
                    value={formData.country}
                    className="form-select text-white-dark"
                    required
                    onChange={handleChange}
                  >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="groupLname">Source Of Funds</label>
                  <select
                    id="ctnSelect2"
                    name="sourceoffunds"
                    value={formData.sourceoffunds}
                    className="form-select text-white-dark"
                    required
                    onChange={handleChange}
                  >
                    <option value="">Select Source of Funds</option>
                    {sourceoffunds.map((source) => (
                      <option key={source} value={source}>
                        {source}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-100 my-2 mr-4 rounded-lg border border-gray-300 p-4">
                  <div>
                    <label htmlFor="groupFname">Quantity</label>
                    <input
                      id="groupFname"
                      type="text"
                      name="quantity"
                      defaultValue={0}
                      placeholder="Quantity"
                      className="form-input"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="groupFname">Commission</label>
                    <input
                      id="groupFname"
                      type="text"
                      name="commission"
                      defaultValue={0}
                      placeholder="Commission"
                      className="form-input"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="groupFname">Rate</label>
                    <input
                      id="groupFname"
                      type="text"
                      name="commission"
                      defaultValue={0}
                      placeholder="Commission"
                      className="form-input"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="groupFname">Total amount</label>
                    <input
                      id="groupFname"
                      type="text"
                      name="totalamount"
                      defaultValue={0}
                      placeholder="total_amount"
                      className="form-input"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary !mt-6">
                  Proceed
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 flex-col">
          <div className="h-1/2 w-full">
            <div className="w-100 my-2 mr-4 rounded-lg border border-gray-300 p-4">
              <div className="mb-2 mt-[-30px]">
                <Tippy content="Customer Information" placement="top">
                  <button type="button" className="btn btn-dark">
                    Customer Information
                  </button>
                </Tippy>
              </div>
              <div className="flex items-center">
                <div>
                  {customerDatabyid &&
                  Object.keys(customerDatabyid).length > 0 ? (
                    <div>
                      <div className="mt-2">
                        <div className="m-auto max-w-5xl px-4 sm:px-8">
                          <Image
                            src={mainImage}
                            width="100"
                            height="100"
                            alt="Example Image"
                          />

                          <ul className="overflow-hidden rounded border border-gray-200 shadow-md">
                            <li className="border-b border-gray-200 bg-white px-4 py-2 transition-all duration-300 ease-in-out last:border-none hover:bg-sky-100 hover:text-sky-900">
                              <div className="flex">
                                <svg
                                  className="h-6 w-6 text-gray-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                  />
                                </svg>
                                {customerDatabyid.firstName}{" "}
                                {customerDatabyid.middleName}{" "}
                                {customerDatabyid.lastName}
                              </div>
                            </li>
                            <li className="border-b border-gray-200 bg-white px-4 py-2 transition-all duration-300 ease-in-out last:border-none hover:bg-sky-100 hover:text-sky-900">
                              <div className="flex">
                                <svg
                                  className="h-5 w-5 text-gray-500"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  {" "}
                                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                {customerDatabyid.mobile}
                              </div>
                            </li>
                            <li className="border-b border-gray-200 bg-white px-4 py-2 transition-all duration-300 ease-in-out last:border-none hover:bg-sky-100 hover:text-sky-900">
                              <div className="flex">
                                <svg
                                  className="h-6 w-6 text-gray-500"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  {" "}
                                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                                  <circle cx={12} cy={5} r={2} />{" "}
                                  <path d="M10 22v-5l-1-1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
                                </svg>
                                <p>Identity verified: : x</p>
                              </div>
                            </li>
                            <li className="border-b border-gray-200 bg-white px-4 py-2 transition-all duration-300 ease-in-out last:border-none hover:bg-sky-100 hover:text-sky-900">
                              <div className="flex">
                                <svg
                                  className="h-6 w-6 text-gray-500"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  {" "}
                                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                                  <line x1={18} y1={6} x2={18} y2="6.01" />{" "}
                                  <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />{" "}
                                  <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />{" "}
                                  <line x1={9} y1={4} x2={9} y2={17} />{" "}
                                  <line x1={15} y1={15} x2={15} y2={20} />
                                </svg>{" "}
                                <p>Address verified: : x</p>
                              </div>
                            </li>
                            <li className="border-b border-gray-200 bg-white px-4 py-2 transition-all duration-300 ease-in-out last:border-none hover:bg-sky-100 hover:text-sky-900">
                              <div className="flex">
                                <svg
                                  className="h-6 w-6 text-gray-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>{" "}
                                <p>{customerDatabyid.address}</p>
                              </div>
                            </li>
                            <li className="border-b border-gray-200 bg-white px-4 py-2 transition-all duration-300 ease-in-out last:border-none hover:bg-sky-100 hover:text-sky-900">
                              <div className="flex">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="h-6 w-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                                  />
                                </svg>
                                <p> {customerDatabyid.dob}</p>
                              </div>
                            </li>
                            <li className="border-b border-gray-200 bg-white px-4 py-2 transition-all duration-300 ease-in-out last:border-none hover:bg-sky-100 hover:text-sky-900">
                              <p>Country: {customerDatabyid.country}</p>
                            </li>
                            <li className="border-b border-gray-200 bg-white px-4 py-2 transition-all duration-300 ease-in-out last:border-none hover:bg-sky-100 hover:text-sky-900">
                              <p>State: {customerDatabyid.state}</p>
                            </li>
                            <li className="border-b border-gray-200 bg-white px-4 py-2 transition-all duration-300 ease-in-out last:border-none hover:bg-sky-100 hover:text-sky-900">
                              <p>City: {customerDatabyid.city}</p>
                            </li>
                          </ul>
                          <a
                            href="mailto:jefte_caro@yahoo.com"
                            className="mt-4 block text-center text-xs hover:underline"
                          ></a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="m-auto">No customer selected</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="h-1/2 w-full ">
            <div className="w-100 my-2 mr-4 rounded-lg border border-gray-300 p-4">
              <div className="mb-2 mt-[-30px]">
                <Tippy content="Order Information" placement="top">
                  <button type="button" className="btn btn-dark">
                    Order Information
                  </button>
                </Tippy>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex">
                  <div className="flex flex-col">
                    <div className="mb-1 flex rounded border border-gray-300">
                      <div className="input-group-addon flex items-center justify-center rounded-l bg-green-500 p-4">
                        <label className="text-sm text-white">
                          AML Reported
                        </label>
                      </div>
                      <div className="form-control flex  h-auto min-h-10 w-20 items-center rounded-r pl-3">
                        <svg
                          className="h-8 w-8 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mb-1 flex rounded border border-gray-300">
                      <div className="input-group-addon flex items-center justify-center rounded-l bg-green-500 p-4">
                        <label className="text-sm text-white">
                          {" "}
                          Open Orders
                        </label>
                      </div>
                      <div className="form-control flex  h-auto min-h-10 w-20 items-center rounded-r pl-3">
                        <svg
                          className="h-8 w-8 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="mb-1 flex  rounded border border-gray-300">
                      <div className="input-group-addon flex items-center justify-center rounded-l bg-green-500 p-4">
                        <label className="text-sm text-white"> Documents</label>
                      </div>
                      <div className="form-control flex  h-auto min-h-10 w-20 items-center rounded-r pl-3">
                        <svg
                          className="h-8 w-8 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="mb-1 flex  rounded border border-gray-300">
                      <div className="input-group-addon flex items-center justify-center rounded-l bg-green-500 p-4">
                        <label className="text-sm text-white">
                          {" "}
                          From Country
                        </label>
                      </div>
                      <div className="form-control flex  h-auto min-h-10 w-20 items-center rounded-r pl-3">
                        <label> Aud</label>
                      </div>
                    </div>

                    <div className="mb-1 flex  rounded border border-gray-300">
                      <div className="input-group-addon flex items-center justify-center rounded-l bg-green-500 p-4">
                        <label className="text-sm text-white">
                          {" "}
                          To Country
                        </label>
                      </div>
                      <div className="form-control flex  h-auto min-h-10 w-20 items-center rounded-r pl-3">
                        <svg
                          className="h-8 w-8 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="mb-1 flex rounded border border-gray-300">
                      <div className="input-group-addon flex items-center justify-center rounded-l bg-green-500 p-4">
                        <label className="text-sm text-white"> Quantity</label>
                      </div>
                      <div className="form-control flex  h-auto min-h-10 w-20 items-center rounded-r pl-3">
                        <label>0</label>
                      </div>
                    </div>

                    <div className="mb-1 flex  rounded border border-gray-300">
                      <div className="input-group-addon flex items-center justify-center rounded-l bg-green-500 p-4">
                        <label className="text-sm text-white">
                          {" "}
                          Rate &nbsp;&nbsp;
                        </label>
                      </div>
                      <div className="form-control flex  h-auto min-h-10 w-20 items-center rounded-r pl-3">
                        <label>0.00</label>
                      </div>
                    </div>

                    <div className="mb-1 flex  rounded border border-gray-300">
                      <div className="input-group-addon flex items-center justify-center rounded-l bg-green-500 p-4">
                        <label className="text-sm text-white">
                          {" "}
                          Customer Pays
                        </label>
                      </div>
                      <div className="form-control flex  h-auto min-h-10 w-20 items-center rounded-r pl-3">
                        <label>0.00</label>
                      </div>
                    </div>

                    <div className="mb-1 flex  rounded border border-gray-300">
                      <div className="input-group-addon flex items-center justify-center rounded-l bg-green-500 p-4">
                        <label className="text-sm text-white">
                          {" "}
                          Customer Receives
                        </label>
                      </div>
                      <div className="form-control flex  h-auto min-h-10 w-20 items-center rounded-r pl-3">
                        <label>0.00</label>
                      </div>
                    </div>

                    <div className="mb-1 flex  rounded border border-gray-300">
                      <div className="input-group-addon flex items-center justify-center rounded-l bg-green-500 p-4">
                        <label className="text-sm text-white">
                          Reasonfor Transfer
                        </label>
                      </div>
                      <div className="form-control flex  h-auto min-h-10 w-20 items-center rounded-r pl-3">
                        <label>0.00</label>
                      </div>
                    </div>

                    <div className="mb-3 flex  rounded border border-gray-300">
                      <div className="input-group-addon flex items-center justify-center rounded-l bg-green-500 p-4">
                        <label className="text-sm text-white">
                          Customer Receives
                        </label>
                      </div>
                      <div className="form-control flex  h-auto min-h-10 w-20 items-center rounded-r pl-3">
                        <label>0.00</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Basic;
