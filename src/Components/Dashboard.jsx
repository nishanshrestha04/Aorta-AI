import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import img1 from "../images/walking.jpg";
import img2 from "../images/nosmoke.jpg";
import img3 from '../images/drinking.jpg'
import "./Dashboard.css";

const Dashboard = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(false);

  const [bmiFocused, setBmiFocused] = useState(false);
  const [bmiHasText, setBmiHasText] = useState(false);

  const [smokingFocused, setSmokingFocused] = useState(false);
  const [smokingHasText, setSmokingHasText] = useState(false);

  const [drinkingFocused, setDrinkingFocused] = useState(false);
  const [drinkingHasText, setDrinkingHasText] = useState(false);

  const [heartFocused, setHeartFocused] = useState(false);
  const [heartHasText, setHeartHasText] = useState(false);

  const [mentalFocused, setMentalFocused] = useState(false);
  const [mentalHasText, setMentalHasText] = useState(false);

  const [physicalFocused, setPhysicalFocused] = useState(false);
  const [physicalHasText, setPhysicalHasText] = useState(false);

  const [raceFocused, setRaceFocused] = useState(false);
  const [raceHasText, setRaceHasText] = useState(false);

  const [dibaticFocused, setDibaticFocused] = useState(false);
  const [dibaticHasText, setDibaticHasText] = useState(false);

  const [activeFocused, setActiveFocused] = useState(false);
  const [activeHasText, setActiveHasText] = useState(false);

  const [ageFocused, setAgeFocused] = useState(false);
  const [ageHasText, setAgeHasText] = useState(false);

  const [genderFocused, setGenderFocused] = useState(false);
  const [genderHasText, setGenderHasText] = useState(false);

  const [generalFocused, setGeneralFocused] = useState(false);
  const [generalHasText, setGeneralHasText] = useState(false);

  const [sleepFocused, setSleepFocused] = useState(false);
  const [sleepHasText, setSleepHasText] = useState(false);

  const [asthmaFocused, setAsthmaFocused] = useState(false);
  const [asthmaHasText, setAsthmaHasText] = useState(false);

  const [walking, setWalking] = useState("");
  const [bmi, setBMi] = useState("");
  const [smoking, setSmoking] = useState("");
  const [drinking, setDrinking] = useState("");
  const [heart, setHeart] = useState("");
  const [mental, setMental] = useState("");
  const [physical, setPhysical] = useState("");
  const [race, setRace] = useState("");
  const [dibatic, setDibatic] = useState("");
  const [active, setActive] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [general, setGeneral] = useState("");
  const [sleep, setSleep] = useState("");
  const [asthma, setAsthma] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setWalking("");
    setBMi("");
    setSmoking("");
    setDrinking("");
    setHeart("");
    setMental("");
    setPhysical("");
    setRace("");
    setDibatic("");
    setActive("");
    setAge("");
    setGender("");
    setGeneral("");
    setSleep("");
    setAsthma("");

    setIsFocused(false);
    setHasText(false);

    setBmiFocused(false);
    setBmiHasText(false);

    setSmokingFocused(false);
    setSmokingHasText(false);

    setDrinkingFocused(false);
    setDrinkingHasText(false);

    setHeartFocused(false);
    setHeartHasText(false);

    setMentalFocused(false);
    setMentalHasText(false);

    setPhysicalFocused(false);
    setPhysicalHasText(false);

    setRaceFocused(false);
    setRaceHasText(false);

    setDibaticFocused(false);
    setDibaticHasText(false);

    setActiveFocused(false);
    setActiveHasText(false);

    setAgeFocused(false);
    setAgeHasText(false);

    setGenderFocused(false);
    setGenderHasText(false);

    setGeneralFocused(false);
    setGeneralHasText(false);

    setSleepFocused(false);
    setSleepHasText(false);

    setAsthmaFocused(false);
    setAsthmaHasText(false);
  };

  return (
    <div>
      <Nav />
      <div className="dashboard w-full h-[700px] bg-[#edf1f4] py-12">
        <div className="dash w-[90%] bg-[#c8102e] h-[600px] mx-20 rounded-xl">
          <form
            action="#"
            id="pre"
            className="flex px-14 gap-[100px]"
            onSubmit={submitHandler}
          >
            <div className="first">
              <div className="relative mt-[20px]">
                <select
                  name="walking"
                  id="walking"
                  value={walking}
                  required
                  onChange={(e) => {
                    setWalking(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white pt-4 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500`}
                  onFocus={() => setIsFocused(true)}
                  onBlur={(e) => {
                    setIsFocused(false);
                    setHasText(e.target.value !== "");
                  }}
                >
                  <option
                    value=""
                    className="bg-white text-[#c8102e] h-4"
                  ></option>
                  <option
                    value="yes"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Yes
                  </option>
                  <option
                    value="no"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    No
                  </option>
                </select>
                <label
                  htmlFor="walking"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    isFocused || hasText ? "top-5 text-sm" : "top-10 text-base"
                  }`}
                >
                  Difficulty in Walking
                </label>
              </div>

              <div className="relative mt-[20px]">
                <input
                  type="number"
                  name="bmi"
                  id="bmi"
                  value={bmi}
                  required
                  onChange={(e) => {
                    setBMi(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white py-2 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500 ${
                    isFocused || hasText ? "pt-6" : ""
                  }`}
                  autoComplete="off"
                  onFocus={() => setBmiFocused(true)}
                  onBlur={(e) => {
                    setBmiFocused(false);
                    setBmiHasText(e.target.value !== "");
                  }}
                />
                <label
                  htmlFor="bmi"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    bmiFocused || bmiHasText
                      ? "top-5 text-sm"
                      : "top-10 text-base"
                  }`}
                >
                  Body Mass Index
                </label>
              </div>

              <div className="relative mt-[20px]">
                <select
                  name="smoking"
                  id="smoking"
                  value={smoking}
                  required
                  onChange={(e) => {
                    setSmoking(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white pt-4 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500`}
                  onFocus={() => setSmokingFocused(true)}
                  onBlur={(e) => {
                    setSmokingFocused(false);
                    setSmokingHasText(e.target.value !== "");
                  }}
                >
                  <option
                    value=""
                    className="bg-white text-[#c8102e] h-4"
                  ></option>
                  <option
                    value="yes"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Yes
                  </option>
                  <option
                    value="no"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    No
                  </option>
                </select>
                <label
                  htmlFor="smoking"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    smokingFocused || smokingHasText
                      ? "top-5 text-sm"
                      : "top-10 text-base"
                  }`}
                >
                  Smoking Habits
                </label>
              </div>

              <div className="relative mt-[20px]">
                <select
                  name="drinking"
                  id="drinking"
                  value={drinking}
                  required
                  onChange={(e) => {
                    setDrinking(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white pt-4 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500`}
                  onFocus={() => setDrinkingFocused(true)}
                  onBlur={(e) => {
                    setDrinkingFocused(false);
                    setDrinkingHasText(e.target.value !== "");
                  }}
                >
                  <option
                    value=""
                    className="bg-white text-[#c8102e] h-4"
                  ></option>
                  <option
                    value="no"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Yes
                  </option>
                  <option
                    value="no"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    No
                  </option>
                </select>
                <label
                  htmlFor="drinking"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    drinkingFocused || drinkingHasText
                      ? "top-5 text-sm"
                      : "top-10 text-base"
                  }`}
                >
                  Drinking Habits
                </label>
              </div>

              <div className="relative mt-[20px]">
                <select
                  name="heart"
                  id="heart"
                  value={heart}
                  required
                  onChange={(e) => {
                    setHeart(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white pt-4 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500`}
                  onFocus={() => setHeartFocused(true)}
                  onBlur={(e) => {
                    setHeartFocused(false);
                    setHeartHasText(e.target.value !== "");
                  }}
                >
                  <option
                    value=""
                    className="bg-white text-[#c8102e] h-4"
                  ></option>
                  <option
                    value="no"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Yes
                  </option>
                  <option
                    value="no"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    No
                  </option>
                </select>
                <label
                  htmlFor="heart"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    heartFocused || heartHasText
                      ? "top-5 text-sm"
                      : "top-10 text-base"
                  }`}
                >
                  Dignosed with Heart Disease
                </label>
              </div>
            </div>

            <div className="second">
              <div className="relative mt-[20px]">
                <input
                  type="number"
                  name="mental"
                  id="mental"
                  value={mental}
                  required
                  onChange={(e) => {
                    setMental(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white py-2 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500 ${
                    isFocused || hasText ? "pt-6" : ""
                  }`}
                  autoComplete="off"
                  onFocus={() => setMentalFocused(true)}
                  onBlur={(e) => {
                    setMentalFocused(false);
                    setMentalHasText(e.target.value !== "");
                  }}
                />
                <label
                  htmlFor="mental"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    mentalFocused || mentalHasText
                      ? "top-5 text-sm"
                      : "top-10 text-base"
                  }`}
                >
                  Mental Health (0-30)
                </label>
              </div>

              <div className="relative mt-[20px]">
                <input
                  type="number"
                  name="physical"
                  id="physical"
                  value={physical}
                  required
                  onChange={(e) => {
                    setPhysical(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white py-2 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500 ${
                    isFocused || hasText ? "pt-6" : ""
                  }`}
                  autoComplete="off"
                  onFocus={() => setPhysicalFocused(true)}
                  onBlur={(e) => {
                    setPhysicalFocused(false);
                    setPhysicalHasText(e.target.value !== "");
                  }}
                />
                <label
                  htmlFor="physical"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    physicalFocused || physicalHasText
                      ? "top-5 text-sm"
                      : "top-10 text-base"
                  }`}
                >
                  Physical Health (0-30)
                </label>
              </div>

              <div className="relative mt-[20px]">
                <select
                  name="race"
                  id="race"
                  value={race}
                  required
                  onChange={(e) => {
                    setRace(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white pt-4 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500`}
                  onFocus={() => setRaceFocused(true)}
                  onBlur={(e) => {
                    setRaceFocused(false);
                    setRaceHasText(e.target.value !== "");
                  }}
                >
                  <option
                    value=""
                    className="bg-white text-[#c8102e] h-4"
                  ></option>
                  <option
                    value="american"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    American Indian
                  </option>
                  <option
                    value="alaska"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Alaskan Native
                  </option>
                  <option
                    value="Asian"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Asian
                  </option>
                  <option
                    value="black"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Black
                  </option>
                  <option
                    value="hispanic"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Hispanic
                  </option>
                  <option
                    value="White"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    White
                  </option>
                  <option
                    value="other"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Other
                  </option>
                </select>
                <label
                  htmlFor="physical"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    raceFocused || raceHasText
                      ? "top-5 text-sm"
                      : "top-10 text-base"
                  }`}
                >
                  Race
                </label>
              </div>

              <div className="relative mt-[20px]">
                <select
                  name="dibatic"
                  id="dibatic"
                  value={dibatic}
                  required
                  onChange={(e) => {
                    setDibatic(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white pt-4 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500`}
                  onFocus={() => setDibaticFocused(true)}
                  onBlur={(e) => {
                    setDibaticFocused(false);
                    setDibaticHasText(e.target.value !== "");
                  }}
                >
                  <option
                    value=""
                    className="bg-white text-[#c8102e] h-4"
                  ></option>
                  <option
                    value="yes"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Yes
                  </option>
                  <option
                    value="no"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    No
                  </option>
                </select>
                <label
                  htmlFor="dibatic"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    dibaticFocused || dibaticHasText
                      ? "top-5 text-sm"
                      : "top-10 text-base"
                  }`}
                >
                  Dignosed with Diabetes
                </label>
              </div>

              <div className="relative mt-[20px]">
                <select
                  name="active"
                  id="active"
                  value={active}
                  required
                  onChange={(e) => {
                    setActive(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white pt-4 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500`}
                  onFocus={() => setActiveFocused(true)}
                  onBlur={(e) => {
                    setActiveFocused(false);
                    setActiveHasText(e.target.value !== "");
                  }}
                >
                  <option
                    value=""
                    className="bg-white text-[#c8102e] h-4"
                  ></option>
                  <option
                    value="yes"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Yes
                  </option>
                  <option
                    value="no"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    No
                  </option>
                </select>
                <label
                  htmlFor="dibatic"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    activeFocused || activeHasText
                      ? "top-5 text-sm"
                      : "top-10 text-base"
                  }`}
                >
                  Physically Active
                </label>
              </div>
            </div>

            <div className="third">

              <div className="relative mt-[20px]">
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={age}
                  required
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white py-2 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500 ${
                    isFocused || hasText ? "pt-6" : ""
                  }`}
                  autoComplete="off"
                  onFocus={() => setAgeFocused(true)}
                  onBlur={(e) => {
                    setAgeFocused(false);
                    setAgeHasText(e.target.value !== "");
                  }}
                />
                <label
                  htmlFor="age"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    ageFocused || ageHasText
                      ? "top-5 text-sm"
                      : "top-10 text-base"
                  }`}
                >
                  Age
                </label>
              </div>

              <div className="relative mt-[20px]">
                <select
                  name="gender"
                  id="gender"
                  value={gender}
                  required
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white pt-4 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500`}
                  onFocus={() => setGenderFocused(true)}
                  onBlur={(e) => {
                    setGenderFocused(false);
                    setGenderHasText(e.target.value !== "");
                  }}
                >
                  <option
                    value=""
                    className="bg-white text-[#c8102e] h-4"
                  ></option>
                  <option
                    value="male"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Male
                  </option>
                  <option
                    value="female"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Female
                  </option>
                </select>
                <label
                  htmlFor="gender"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    genderFocused || genderHasText
                      ? "top-5 text-sm"
                      : "top-10 text-base"
                  }`}
                >
                  Gender
                </label>
              </div>

              <div className="relative mt-[20px]">
                <select
                  name="general"
                  id="general"
                  value={general}
                  required
                  onChange={(e) => {
                    setGeneral(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white pt-4 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500`}
                  onFocus={() => setGeneralFocused(true)}
                  onBlur={(e) => {
                    setGeneralFocused(false);
                    setGeneralHasText(e.target.value !== "");
                  }}
                >
                  <option
                    value=""
                    className="bg-white text-[#c8102e] h-4"
                  ></option>
                  <option
                    value="poor"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Poor
                  </option>
                  <option
                    value="fair"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Fair
                  </option>
                  <option
                    value="Good"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Good
                  </option>
                  <option
                    value="vgood"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Very Good
                  </option>
                  <option
                    value="exc"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Excellent
                  </option>
                </select>
                <label
                  htmlFor="ggeneral"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    generalFocused || generalHasText
                      ? "top-5 text-sm"
                      : "top-10 text-base"
                  }`}
                >
                  General Health
                </label>
              </div>

              <div className="relative mt-[20px]">
                <input
                  type="number"
                  name="sleep"
                  id="sleep"
                  value={sleep}
                  required
                  onChange={(e) => {
                    setSleep(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white py-2 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500 ${
                    isFocused || hasText ? "pt-6" : ""
                  }`}
                  autoComplete="off"
                  onFocus={() => setSleepFocused(true)}
                  onBlur={(e) => {
                    setSleepFocused(false);
                    setSleepHasText(e.target.value !== "");
                  }}
                />
                <label
                  htmlFor="bmi"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    sleepFocused || sleepHasText
                      ? "top-5 text-sm"
                      : "top-10 text-base"
                  }`}
                >
                  Sleep Hour in a Day
                </label>
              </div>

              <div className="relative mt-[20px]">
                <select
                  name="asthma"
                  id="asthma"
                  value={asthma}
                  required
                  onChange={(e) => {
                    setAsthma(e.target.value);
                  }}
                  className={`w-[300px] h-[40px] bg-[#c8102e] border-b-2 border-white pt-4 focus:outline-none transition-colors peer mt-[30px] font-lato text-white tracking-widest duration-500`}
                  onFocus={() => setAsthmaFocused(true)}
                  onBlur={(e) => {
                    setAsthmaFocused(false);
                    setAsthmaHasText(e.target.value !== "");
                  }}
                >
                  <option
                    value=""
                    className="bg-white text-[#c8102e] h-4"
                  ></option>
                  <option
                    value="yes"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    Yes
                  </option>
                  <option
                    value="No"
                    className="bg-white text-[#c8102e] p-4 text-sm"
                  >
                    No
                  </option>
                </select>
                <label
                  htmlFor="gender"
                  className={`absolute left-0 text-white font-lato font-bold tracking-widest transition-all duration-500 ${
                    asthmaFocused || asthmaHasText
                      ? "top-5 text-sm"
                      : "top-10 text-base"
                  }`}
                >
                  Dignosed with Asthma
                </label>
              </div>
              
            </div>

            {/* Submit Button */}
          </form>
          <div className="flex justify-center">
          <div className="submit-section mt-[80px]  ">
            <button
              type="submit"
              form="pre"
              className="bg-white hover:border-white hover:border text-[#c8102e] font-lato text-xl font-bold tracking-widest px-8 py-2 rounded-full hover:bg-[#c8102e] hover:text-white transition-all duration-500"
            >
              Submit
            </button>
          </div>
          </div>
        </div>
      </div>
      <div className="seconds">
        <h1 className="font-lato font-bold uppercase text-3xl ml-20 mt-[50px]">
          recommendation
        </h1>
        <div className="flex justify-evenly mt-[50px]">
          <div className="w-[405px] h-[452px] bg-[#dfe2e3] rounded-[10px] flex justify-center">
            <div className="w-[369px] h-[225px] mt-5 rounded-xl">
              <img
                src={img1}
                alt="sanket"
                className="w-[369px] h-[225px] rounded-xl"
              />
              <p className="ml-1 mt-[12px]  text-[#c8102e] font-lato text-[16px] ">
                Walking
              </p>
            </div>
          </div>

          <div className="w-[405px] h-[452px] bg-[#dfe2e3] rounded-[10px] flex justify-center">
            <div className="w-[369px] h-[225px] mt-5 rounded-xl">
              <img
                src={img2}
                alt="nishan"
                className="w-[369px] h-[225px] rounded-xl"
              />
              <p className="ml-1 mt-[12px] text-[#c8102e] font-lato text-[16px] ">
                No smoking
              </p>
            </div>
          </div>

          <div className="w-[405px] h-[452px] bg-[#dfe2e3] rounded-[10px] flex justify-center">
            <div className="w-[369px] h-[225px] mt-5 rounded-xl">
              <img
                src={img3}
                alt="ashlesha"
                className="w-[369px] h-[225px] rounded-xl"
              />
              <p className="ml-1 mt-[12px] text-[#c8102e] font-lato text-[16px] ">
                No Drinking
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
