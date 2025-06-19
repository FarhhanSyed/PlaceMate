import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faBrain,
  faCheck,
  faDatabase,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
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
    </div>
  );
};

export default HomePage;
