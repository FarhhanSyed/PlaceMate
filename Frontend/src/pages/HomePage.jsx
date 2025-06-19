import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faBrain,
  faCheck,
  faDatabase,
  faNetworkWired,
  faBolt,
  faTrophy,
  faClock,
  faCirclePlay,
  faUser,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <section id="home" className="pt-24 pb-16">
        <div className="container mx-auto py-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block rounded-2xl px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-medium ">
                Placement Preparation Platform
              </div>

              <h1 className="text-gray-900 text-5xl md:text-6xl font-bold leading-16">
                Ace Your Placement journey with{" "}
                <span className="text-emerald-600">PlaceMate</span>
              </h1>

              <p className="text-gray-600 text-xl leading-relaxed max-w-lg">
                Comprehensive quiz platform designed to help you excel in
                Aptitude, Computer Networks, Object-Oriented Programming,
                Database Management, and Data Structures.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/signup">
                  <button className="cursor-pointer rounded-lg text-lg font-semibold bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2">
                    Start Practicing <code>{"->"}</code>
                  </button>
                </Link>
                <button className="cursor-pointer rounded-lg border-1 border-gray-400 px-8 py-2 font-semibold text-black text-lg hover:bg-gray-100">
                  Explore Resources
                </button>
              </div>

              <div className="flex flex-wrap gap-4 pt-1">
                <div className="flex items-center space-x-3">
                  <div className=" w-8 h-8 bg-emerald-200 flex items-center justify-center rounded-full">
                    <FontAwesomeIcon icon={faBullseye} />
                  </div>
                  <span className="text-gray-700">5,000+ Questions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-200 flex justify-center items-center rounded-full">
                    <FontAwesomeIcon icon={faBrain} />
                  </div>
                  <span className="text-gray-700">5 Core Subjects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-200 flex justify-center items-center rounded-full">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <span className="text-gray-700">Topic-wise Tests</span>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <Card sx={{ maxWidth: 600 }}>
                <CardActionArea>
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <code>{"//"}</code>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">
                          Aptitude & Reasoning
                        </h3>
                        <p className="text-gray-500 text-sm mb-3">
                          Quantitative & Logical Reasoning
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Master numerical ability, logical reasoning, and
                          analytical skills for placement tests.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 600 }}>
                <CardActionArea>
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faDatabase} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">
                          DBMS & SQL
                        </h3>
                        <p className="text-gray-500 text-sm mb-3">
                          Database Management Systems
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Learn normalization, SQL queries, transactions, and
                          database design principles.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 600 }}>
                <CardActionArea>
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faNetworkWired} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">
                          Computer Networks
                        </h3>
                        <p className="text-gray-500 text-sm mb-3">
                          Networking Fundamentals
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Understand OSI model, TCP/IP, routing protocols, and
                          network security.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose PlaceMate?
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Our comprehensive platform offers everything you need to succeed
              in your placement interviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-7 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faBolt}
                    className="text-emerald-600"
                    size="lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Topic-wise Practice
                </h3>
                <p className="text-gray-600 text-md">
                  Focused quizzes on specific subjects help you master each
                  topic systematically
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="text-emerald-600"
                    size="lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Timed Mock Tests
                </h3>
                <p className="text-gray-600 text-md">
                  Simulate real placement exam conditions with time-bound
                  practice sessions
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-emerald-600"
                    size="lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Detailed Solutions
                </h3>
                <p className="text-gray-600 text-md">
                  Step-by-step explanations for every question help you
                  understand concepts better
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quizz Section*/}
      <section id="quizzes" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Practice Quizzes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Test your knowledge with our comprehensive quiz collections across
              all subjects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-5 hover:shadow-lg transition-shadow h-fit">
              <CardContent className="p-0">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faBrain} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      Aptitude Quiz
                    </h3>
                    <p className="text-gray-500 text-xs">500+ Questions</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Test your quantitative aptitude, logical reasoning, and verbal
                  ability skills.
                </p>
              </CardContent>
            </Card>

            <Card className="p-5 hover:shadow-lg transition-shadow h-fit">
              <CardContent className="p-0">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faNetworkWired} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      Computer Networks
                    </h3>
                    <p className="text-gray-500 text-xs">500+ Questions</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Master networking concepts, protocols, and network security
                  fundamentals.
                </p>
              </CardContent>
            </Card>

            <Card className="p-5 hover:shadow-lg transition-shadow h-fit">
              <CardContent className="p-0">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faNetworkWired} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      OOPs Concepts
                    </h3>
                    <p className="text-gray-500 text-xs">250+ Questions</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Practice object-oriented programming principles and design
                  patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="p-5 hover:shadow-lg transition-shadow h-fit">
              <CardContent className="p-0">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faDatabase} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      DBMS Quiz
                    </h3>
                    <p className="text-gray-500 text-xs">400+ Questions</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Test your database management and SQL query writing skills.
                </p>
              </CardContent>
            </Card>

            <Card className="p-5 hover:shadow-lg transition-shadow h-fit">
              <CardContent className="p-0">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-orange-200 rounded-lg flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faBullseye} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      Data Structures
                    </h3>
                    <p className="text-gray-500 text-xs">300+ Questions</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Practice arrays, trees, graphs, and algorithm implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-5 hover:shadow-lg transition-shadow h-fit">
              <CardContent className="p-0">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faTrophy} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      Mock Test
                    </h3>
                    <p className="text-gray-500 text-xs">Full length</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Complete placement test simulation with questions from all
                  subjects.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-5">
            <Link to="/quizzes">
              <button className="bg-emerald-600 rounded-xl hover:bg-emerald-700 text-white px-8 py-3 text-lg cursor-pointer">
                <FontAwesomeIcon icon={faCirclePlay} /> &nbsp; Explore All
                Quizzes
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section id="resources" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Learning Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive study materials to help you master each subject
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {/* <FileText className="text-blue-600" size={32} /> */}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Study Notes
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive notes covering all topics in each subject
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {/* <Video className="text-green-600" size={32} /> */}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Video Lectures
                </h3>
                <p className="text-gray-600 mb-6">
                  Expert-created video content explaining complex concepts
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {/* <BookOpen className="text-purple-600" size={32} /> */}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Practice Sets
                </h3>
                <p className="text-gray-600 mb-6">
                  Additional practice questions with detailed solutions
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-12 rounded-lg flex items-center justify-center mr-4">
                  {/* <Zap className="text-orange-600" size={32} /> */}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Revision
                </h3>
                <p className="text-gray-600 mb-6">
                  Last-minute revision materials and important formulas
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <Card className="p-8 bg-gradient-to-r from-emerald-50 to-blue-50">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Subject-wise Resources
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Access organized study materials for each subject
                      including cheat sheets, formula lists, and important
                      concepts summary.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        Aptitude
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        Computer Networks
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        OOPs
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                        DBMS
                      </span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                        Data Structures
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                      Explore All Resources
                      {/* <ArrowRight className="ml-2" size={20} /> */}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer*/}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <code>{"</>"}</code>
                </div>
                <span className="text-2xl font-bold">PlaceMate</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering students to achieve their career goals through
                comprehensive placement preparation.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faBookOpen} />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faNetworkWired} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PlaceMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
