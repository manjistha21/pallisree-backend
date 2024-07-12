"use client";
import IconArrowBackward from "@/components/icon/icon-arrow-backward";
import PanelCodeHighlight from "@/components/panel-code-highlight";
import { Metadata } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Basic = () => {
  const currency = [
    "AUD - Australian Dollar",
    "AFN - Afganistan Afgani",
    "USD - United States Dollar",
    "EUR - Euro",
    "GBP - United Kingdom Pound",
    "CAD - Canadian Dollar",
    "ETB - Ethiopian Birr",
    "PKR - Pakistan Rupee",
    "MYR - Malaysia Ringgit",
    "AED - Emirates Dirham",
    "ALL - Albania lek",
    "ANG - Netherlands Antilles Guilder",
    "ARS - Argentina Peso",
    "AWG - Aruba Guilder",
    "AZN - Azerbaijan New Manat",
    "BAM - Bosnia and Herzegovina Convertible Marka",
    "BBD - Barbados Dollar",
    "BGN - Bulgaria lev",
    "BMD - Barmuda Dollar",
    "BND - Brunei Darussalam Dollar",
    "BOB - Bolivia Boliviano",
    "BRL - Brazil Real",
    "BSD - Bahamas Dollar",
    "BWP - Botswana Pula",
    "BYR - Belarus Ruble",
    "BZD - Belize Dollar",
    "CHP - Switzerland Franc",
    "CLP - Chile peso",
    "CNY - China Yuan Renminbi",
    "COP - Colombia Peso",
    "CRC - Costa Rica Colon",
    "CUP - Cuba Peso",
    "CZK - Czech Republic Koruna",
    "DKK - Denmark Krone",
    "DOP - Dominican Republic Peso",
    "EEK - Estonia Kroon",
    "EGP - Egypt Pound",
    "FZD - Fizi Dollar",
    "FKP - Falkland Islands (Malvinas) Pound",
    "GGP - Guernsey Pound",
    "GHC - Ghana Cedi",
    "GIP - Gibraltar Pound",
    "GTQ - Guatemala Quetzal",
    "GYD - Guyana Dollar",
    "HKD - Hong Kong Dollar",
    "HNL - Honduras Lempira",
    "HRK - Croatia Kuna",
    "HUF - Hungary Forint",
    "IDR - Indonesia Rupiah",
    "ILS Israel Shekel",

    "IMP Isle of Man Pound",

    "INR India Rupee",

    "IRR Iranian Rial",

    "ISK Iceland Krona",

    "JEP Jersey Pound",

    "JMD Jamaica Dollar",

    "JPY - Japan Yen",

    "KGSKyrgyzstan Som",

    "KHR Cambodia Riel",

    "KPW - Korea (North) Won",

    "KRW - Korea (South) Won",

    "KYD Cayman Islands Dollar",

    "KZT Kazakhstan Tenge",

    "LAK - Laos Kip",

    "LBPLebanon Pound",

    "LKR - Sri Lanka Rupee",

    "LRD Liberia Dollar",

    "LTL - Lithuania Litas",

    "LVL - Latvia Lat",

    "MKD - Macedonia Denar",

    "MNT - Mongolia Tughrik",

    "MUR - Mauritius Rupee",

    "MXN - Mexico Peso",

    "MZN - Mozambique Metical",

    "NAD Namibia Dollar",

    "NGN - Nigeria Naira",

    "NIO Nicaragua Cordoba",

    "NOK - Norway Krone",

    "NPR - Nepal Rupee",

    "NZD - New Zealand Dollar",

    "OMR - Oman Rial",

    "PAB - Panama Balboa",
    "PEN - Peru Nuevo Sol",

    "PHP - Philippines Peso",

    "PLN - Poland Zloty",

    "PYG Paraguay Guarani",

    "QAR - Qatar Riyal",

    "RON - Romania New Leu",

    "RSD - Serbia Dinar",

    "RUB - Russia Ruble",

    "SAR - Saudi Arabia Riyal",

    "SBD - Solomon Islands Dollar",

    "SCR- Seychelles Rupee",

    "SEK - Sweden Krona",

    "SGD - Singapore Dollar",

    "SHP - Saint Helena Pound",

    "SOS- Somalia Shilling",

    "SRD-Suriname Dollar",

    "SVC - El Salvador Colon",

    "SYP - Syria Pound",

    "THB - Thailand Baht",

    "TRL - Turkey Lira",

    "TRY - Turkey Lira",

    "TTD - Trinidad and Tobago Dollar",

    "TVD-Tuvalu Dollar",

    "TWD - Taiwan New Dollar",

    "UAH - Ukraine Hryvnia",

    "UYU - Uruguay Peso",

    "UZS - Uzbekistan Som",

    "VEF - Venezuela Bolivar",

    "VND - Viet Nam Dong",

    "XCD - East Caribbean Dollar",

    "YER - Yemen Rial",

    "ZAR - South Africa Rand",

    "ZWD - Zimbabwe Dollar",
  ];

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

  const [formData, setFormData] = useState({
    basecountry: " ",
    foreigncurrency: " ",
    fromcountry:" ",
    tocountry: " ",
    ratecurrency:" ",
    transfertype:" ",
    status:" ",
    unit:" "
  });

  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/rate", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
      } else {
        throw new Error("Failed to create a rate");
      }
    } catch (error) {
      console.log(error);
    }
  };

   return (
    <div>
      <Link href={"/rate"}>
        <button type="button" className="btn btn-primary">
          {" "}
          <IconArrowBackward className="ltr:mr-2 rtl:ml-2" />
          Back to rate List{" "}
        </button>{" "}
      </Link>

      <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
        <div className="mb-5">
          <form className="space-x-5-y-5" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="groupLname">Base Country</label>
              <select
                id="ctnSelect2"
                name="basecountry"
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
              <label htmlFor="groupLname">Foreign Currency</label>
              <select
                id="ctnSelect2"
                name="foreigncurrency"
                className="form-select text-white-dark"
                required
                onChange={handleChange}
              >
                <option value=""></option>
                {currency.map((fc) => (
                  <option key={fc} value={fc}>
                    {fc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="groupLname">From Country</label>
              <select
                id="ctnSelect2"
                name="fromcountry"
                className="form-select text-white-dark"
                required
                onChange={handleChange}
              >
                <option value=""></option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="groupLname">To Country</label>
              <select
                id="ctnSelect2"
                name="tocountry"
                className="form-select text-white-dark"
                required
                onChange={handleChange}
              >
                <option value=""></option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="groupLname">Rate Currency</label>
              <select
                id="ctnSelect2"
                name="ratecurrency"
                className="form-select text-white-dark"
                required
                onChange={handleChange}
              >
                <option value=""></option>
                {currency.map((fc) => (
                  <option key={fc} value={fc}>
                    {fc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="ctnSelect1">Transfer Type</label>
              <select
                className="form-select text-white-dark"
                name="transfertype"
                onChange={handleChange}
              >
                <option>buy</option>
                <option>sell</option>
              </select>
            </div>

            <div>
              <label htmlFor="ctnSelect1">Status</label>
              <select
                className="form-select text-white-dark"
                name="status"
                onChange={handleChange}
              >
                <option>Active</option>
                <option>Call</option>
                <option>InActive</option>
                <option>Disabled</option>
              </select>
            </div>

            <div>
              <label htmlFor="groupFname">Unit</label>
              <input
                id="groupFname"
                type="text"
                name="unit"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary !mt-6">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Basic;
