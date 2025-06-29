const data = {
  aptitude: {
    title: "Aptitude Quiz",
    difficulty: "medium",
    questions: [
      {
        question:
          "What is the least number which when divided by 5, 6, 7, and 8 leaves a remainder of 3, but is divisible by 9?",
        options: ["1683", "2007", "3363", "4011"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "If a train 180 m long is running at 90 km/hr, how long will it take to cross a platform 120 m long?",
        options: ["8 seconds", "10 seconds", "12 seconds", "6 seconds"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "A man can row 18 km/hr in still water. If the river is running at 6 km/hr, it takes him 1 hour to row to a place and come back. How far is the place?",
        options: ["5 km", "6 km", "7 km", "8 km"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "The average of 20 numbers is zero. Of them, at most, how many may be greater than zero?",
        options: ["0", "1", "19", "20"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "If 2x – 3y = 6 and 4x + 5y = 20, then what is the value of x and y?",
        options: [
          "x = 3, y = 0",
          "x = 2, y = -2",
          "x = 4, y = 1",
          "x = 5, y = -1",
        ],
        correctAnswerIndex: 2,
      },
      {
        question:
          "A can complete a work in 12 days and B in 16 days. If both work together, in how many days will the work be completed?",
        options: ["6.86 days", "7 days", "6.9 days", "7.2 days"],
        correctAnswerIndex: 3,
      },
      {
        question:
          "The average of 10 numbers is 23. If each number is increased by 4, what will be the new average?",
        options: ["27", "25", "26", "24"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "What will come in place of the question mark? 144 : 12 :: 169 : ?",
        options: ["11", "13", "14", "15"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "What is the compound interest on ₹5000 for 2 years at 10% per annum?",
        options: ["₹1000", "₹1050", "₹1100", "₹1155"],
        correctAnswerIndex: 3,
      },
      {
        question: "What is the sum of the first 20 natural numbers?",
        options: ["210", "220", "200", "230"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "If the price of a shirt increases from ₹400 to ₹460, what is the percentage increase?",
        options: ["15%", "10%", "12%", "20%"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "A student scored 75 marks in one subject and 80 in another. What is the average?",
        options: ["77", "76", "78", "79"],
        correctAnswerIndex: 0,
      },
      {
        question: "If 3x + 2 = 17, what is the value of x?",
        options: ["5", "4", "6", "7"],
        correctAnswerIndex: 0,
      },
      {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "If the area of a square is 144 cm², what is the length of one side?",
        options: ["12 cm", "14 cm", "16 cm", "10 cm"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "A can do a piece of work in 20 days. B is 25% more efficient than A. In how many days can B do the same work?",
        options: ["15 days", "16 days", "18 days", "12 days"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "A man invests ₹8000 in a scheme that gives 10% compound interest per annum. What will be the total interest after 2 years?",
        options: ["₹1600", "₹1680", "₹1720", "₹1760"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "A and B together can complete a work in 12 days. A alone can do it in 18 days. How long will B alone take?",
        options: ["24 days", "30 days", "36 days", "27 days"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "If the ratio of angles in a triangle is 3:4:5, what is the smallest angle?",
        options: ["30°", "36°", "45°", "60°"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "A shopkeeper marks an article 40% above cost price and gives a discount of 10%. What is the profit percentage?",
        options: ["30%", "26%", "24%", "28%"],
        correctAnswerIndex: 3,
      },
      {
        question:
          "If 4 men or 6 women can complete a job in 12 days, how long will 2 men and 3 women take?",
        options: ["12 days", "10 days", "8 days", "6 days"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "Train A running at 72 km/hr overtakes Train B running at 54 km/hr in 20 seconds. If Train B is 180m long, find the length of Train A.",
        options: ["210 m", "240 m", "300 m", "180 m"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "The average of five consecutive odd numbers is 45. What is the smallest number?",
        options: ["39", "41", "43", "37"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "The difference between the compound interest and simple interest on ₹5000 for 2 years at 10% is:",
        options: ["₹50", "₹60", "₹40", "₹30"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "A sum becomes 4 times in 2 years at compound interest. In how many years will it become 16 times?",
        options: ["4 years", "6 years", "8 years", "5 years"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "A batsman has a certain average after 10 innings. In the 11th inning, he scores 100 runs and his average increases by 5. What was his average before the 11th inning?",
        options: ["45", "50", "55", "40"],
        correctAnswerIndex: 3,
      },
      {
        question:
          "The sum of ages of A and B is 60. Five years ago, the ratio of their ages was 7:5. What is the age of A now?",
        options: ["35", "38", "40", "42"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "A tank can be filled by Pipe A in 30 minutes and emptied by Pipe B in 45 minutes. If both pipes are opened together, how long will it take to fill the tank?",
        options: ["90 min", "80 min", "120 min", "60 min"],
        correctAnswerIndex: 3,
      },
      {
        question:
          "If a boat goes 30 km upstream in 6 hours and 36 km downstream in 4 hours, what is the speed of the boat in still water?",
        options: ["8 km/hr", "9 km/hr", "10 km/hr", "12 km/hr"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "A trader allows a discount of 20% on the marked price and still gains 25%. What is the cost price of a ₹100 item?",
        options: ["₹60", "₹62.5", "₹64", "₹65"],
        correctAnswerIndex: 1,
      },
    ],
  },
  networks: {
    title: "Computer Networks",
    difficulty: "hard",
    questions: [
      {
        question:
          "What is the main function of the Transport layer in the OSI model?",
        options: [
          "Routing",
          "End-to-end communication and error recovery",
          "Encryption",
          "Bit transmission",
        ],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which protocol is used to find the hardware address of a local device?",
        options: ["IP", "RARP", "ARP", "ICMP"],
        correctAnswerIndex: 2,
      },
      {
        question: "Which one of the following is not a guided media?",
        options: [
          "Twisted pair cable",
          "Fiber optics",
          "Coaxial cable",
          "Microwave",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "What is the size of an IPv6 address?",
        options: ["32 bits", "64 bits", "128 bits", "256 bits"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which of the following layers is responsible for process-to-process communication?",
        options: [
          "Data Link Layer",
          "Transport Layer",
          "Session Layer",
          "Network Layer",
        ],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which device operates at the Data Link Layer of the OSI model?",
        options: ["Switch", "Router", "Repeater", "Hub"],
        correctAnswerIndex: 0,
      },
      {
        question: "What does DNS stand for?",
        options: [
          "Digital Network System",
          "Domain Name System",
          "Distributed Name Service",
          "Data Network Server",
        ],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which protocol is used for secure communication over a network?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which IP class provides a maximum of only 254 host addresses per network ID?",
        options: ["Class A", "Class B", "Class C", "Class D"],
        correctAnswerIndex: 2,
      },
      {
        question: "What is the default subnet mask for a Class B IP address?",
        options: [
          "255.255.0.0",
          "255.0.0.0",
          "255.255.255.0",
          "255.255.255.255",
        ],
        correctAnswerIndex: 0,
      },
      {
        question:
          "Which protocol is used by email clients to retrieve emails from a server?",
        options: ["SMTP", "IMAP", "FTP", "SNMP"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "In which topology does every device have exactly two neighbors?",
        options: ["Star", "Ring", "Mesh", "Bus"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which layer is responsible for converting data into signals for transmission?",
        options: ["Network", "Presentation", "Physical", "Data Link"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which one of the following is a connection-oriented protocol?",
        options: ["UDP", "TCP", "IP", "ICMP"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which of these is a private IP address?",
        options: ["172.16.0.1", "8.8.8.8", "192.0.2.1", "10.0.0.256"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "In TCP congestion control, what happens during the slow start phase?",
        options: [
          "Congestion window increases linearly",
          "Congestion window doubles every RTT",
          "No data is sent",
          "Congestion window decreases exponentially",
        ],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which of the following best describes the use of a subnet mask?",
        options: [
          "It identifies the broadcast address",
          "It determines the class of an IP address",
          "It separates the network and host portions of an IP address",
          "It encrypts IP packets",
        ],
        correctAnswerIndex: 2,
      },
      {
        question:
          "A network uses CIDR with the address 192.168.0.0/21. How many valid host addresses are available?",
        options: ["2046", "2048", "1024", "510"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "Which of the following protocols is NOT involved in secure email communication?",
        options: ["IMAPS", "SMTPS", "POP3", "PGP"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which of the following attacks is mitigated using SYN cookies?",
        options: [
          "Man-in-the-middle attack",
          "ARP spoofing",
          "SYN flood attack",
          "Ping of Death",
        ],
        correctAnswerIndex: 2,
      },
      {
        question:
          "In a routing table, what is the significance of the longest prefix match?",
        options: [
          "It determines the route with the lowest metric",
          "It ensures compatibility with IPv6",
          "It selects the route with the most specific match to the destination IP",
          "It avoids loops in routing",
        ],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which layer of the OSI model is responsible for reliable delivery of data?",
        options: [
          "Network Layer",
          "Transport Layer",
          "Session Layer",
          "Data Link Layer",
        ],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which one of the following best explains how NAT (Network Address Translation) works?",
        options: [
          "Maps a public IP to multiple private IPs dynamically",
          "Assigns static MAC addresses to each IP",
          "Encrypts IP headers before transmission",
          "Allocates multiple MAC addresses per IP",
        ],
        correctAnswerIndex: 0,
      },
      {
        question:
          "Which routing algorithm uses the Bellman-Ford algorithm internally?",
        options: ["OSPF", "EIGRP", "BGP", "RIP"],
        correctAnswerIndex: 3,
      },
      {
        question:
          "Which protocol uses port number 53 and works over both TCP and UDP?",
        options: ["SMTP", "DNS", "DHCP", "SNMP"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "What is the major drawback of the Distance Vector Routing algorithm?",
        options: [
          "It doesn't support subnetting",
          "It can lead to routing loops and count-to-infinity problems",
          "It is only compatible with IPv6",
          "It requires complex hardware to operate",
        ],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which field in the IPv4 header is used to prevent infinite looping of packets?",
        options: ["TTL", "Checksum", "Flags", "Identification"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "Which of the following is true about BGP (Border Gateway Protocol)?",
        options: [
          "It is used only in private LANs",
          "It is a distance vector protocol",
          "It is an inter-domain path-vector routing protocol",
          "It works at the data link layer",
        ],
        correctAnswerIndex: 2,
      },
      {
        question:
          "What is the maximum number of hosts possible in a /26 subnet?",
        options: ["62", "64", "30", "126"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "Which of the following is a proactive routing protocol in ad-hoc wireless networks?",
        options: ["DSR", "AODV", "TORA", "OLSR"],
        correctAnswerIndex: 3,
      },
    ],
  },
  oops: {
    title: "OOPs Concepts",
    difficulty: "medium",
    questions: [
      {
        question:
          "Which of the following allows multiple forms of the same function?",
        options: [
          "Inheritance",
          "Polymorphism",
          "Encapsulation",
          "Abstraction",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Which OOP principle binds data and functions together?",
        options: [
          "Polymorphism",
          "Abstraction",
          "Encapsulation",
          "Inheritance",
        ],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which keyword is used to prevent a class from being inherited?",
        options: ["abstract", "final", "sealed", "private"],
        correctAnswerIndex: 1,
      },
      {
        question: "Runtime polymorphism is achieved through?",
        options: [
          "Function Overloading",
          "Operator Overloading",
          "Virtual Functions",
          "Templates",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "What is constructor overloading?",
        options: [
          "Defining a constructor inside another",
          "More than one constructor with different parameters",
          "Overriding base class constructor",
          "Constructor returning value",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Which feature of OOP promotes code reuse?",
        options: [
          "Polymorphism",
          "Encapsulation",
          "Inheritance",
          "Abstraction",
        ],
        correctAnswerIndex: 2,
      },
      {
        question:
          "What is the term for hiding internal details and showing only functionality?",
        options: [
          "Encapsulation",
          "Polymorphism",
          "Abstraction",
          "Inheritance",
        ],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which type of inheritance involves a class derived from more than one base class?",
        options: ["Multilevel", "Hierarchical", "Multiple", "Hybrid"],
        correctAnswerIndex: 2,
      },
      {
        question: "Which method cannot be overridden?",
        options: [
          "Virtual method",
          "Static method",
          "Abstract method",
          "Instance method",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Which of the following is not a type of constructor?",
        options: ["Default", "Copy", "Virtual", "Parameterized"],
        correctAnswerIndex: 2,
      },
      {
        question: "Which concept is used to implement late binding?",
        options: [
          "Inheritance",
          "Polymorphism",
          "Encapsulation",
          "Constructor",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Which concept is used to restrict access to class members?",
        options: [
          "Access Specifiers",
          "Constructors",
          "Destructors",
          "Data Types",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Which of the following cannot be inherited?",
        options: [
          "Private members",
          "Protected members",
          "Public members",
          "All of the above",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Which of the following is true about destructors?",
        options: [
          "They are overloaded",
          "They take parameters",
          "They are called explicitly",
          "They have the same name as class with a tilde (~)",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Which OOP concept models real-world behavior in code?",
        options: [
          "Encapsulation",
          "Inheritance",
          "Abstraction",
          "All of the above",
        ],
        correctAnswerIndex: 3,
      },
      {
        question:
          "What is the correct order of constructor and destructor invocation in case of inheritance?",
        options: [
          "Base Constructor → Derived Constructor → Base Destructor → Derived Destructor",
          "Derived Constructor → Base Constructor → Base Destructor → Derived Destructor",
          "Base Constructor → Derived Constructor → Derived Destructor → Base Destructor",
          "Derived Constructor → Base Constructor → Derived Destructor → Base Destructor",
        ],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which principle states that objects should be replaceable by instances of their subtypes without altering correctness?",
        options: [
          "Open/Closed Principle",
          "Liskov Substitution Principle",
          "Interface Segregation Principle",
          "Dependency Inversion Principle",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "What is the problem that virtual inheritance solves?",
        options: [
          "Encapsulation of base class methods",
          "Diamond problem in multiple inheritance",
          "Access modifier collisions",
          "Dynamic polymorphism issues",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Which of the following best explains method hiding?",
        options: [
          "Using virtual functions",
          "Overriding a base class method",
          "Defining a new method with same name in derived class without virtual",
          "Using static methods",
        ],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which design principle states that classes should be open for extension but closed for modification?",
        options: [
          "Single Responsibility Principle",
          "Interface Segregation Principle",
          "Open/Closed Principle",
          "Liskov Substitution Principle",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "What happens when a base class has a private constructor?",
        options: [
          "It cannot be inherited",
          "It cannot be instantiated outside",
          "It can only be inherited using friend classes",
          "It must be abstract",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Which of these is not a valid polymorphic behavior?",
        options: [
          "Function overloading",
          "Operator overloading",
          "Constructor overloading",
          "Friend function overloading",
        ],
        correctAnswerIndex: 3,
      },
      {
        question:
          "Which OOP principle directly supports modularity and reuse via interface contracts?",
        options: [
          "Encapsulation",
          "Abstraction",
          "Polymorphism",
          "Inheritance",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Which statement about abstract classes is false?",
        options: [
          "They can contain constructors",
          "They can have abstract and non-abstract methods",
          "They can be instantiated using derived classes",
          "They can implement multiple interfaces",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Which of these cannot be declared as virtual?",
        options: [
          "Constructor",
          "Destructor",
          "Member function",
          "Base class method",
        ],
        correctAnswerIndex: 0,
      },
      {
        question:
          "In C++, what is the output if a virtual function is called inside the constructor?",
        options: [
          "Base class version is called",
          "Derived class version is called",
          "Depends on runtime object type",
          "Compiler error",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "What does the 'this' pointer refer to?",
        options: [
          "The calling function",
          "The class definition",
          "The current object",
          "The base class",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "What is constructor chaining?",
        options: [
          "Calling parent constructor in derived class",
          "Overloading constructor inside a class",
          "Calling one constructor from another in same class",
          "Linking multiple constructors via inheritance",
        ],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which access specifier allows derived classes but not unrelated classes to access members?",
        options: ["Private", "Protected", "Public", "Internal"],
        correctAnswerIndex: 1,
      },
      {
        question: "Why can't static methods use instance variables?",
        options: [
          "They run at compile-time",
          "They do not receive the 'this' reference",
          "They can't be overloaded",
          "They are always public",
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
  dbms: {
    title: "DBMS Quiz",
    difficulty: "medium",
    questions: [
      {
        question: "Which normal form eliminates transitive dependencies?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which SQL command is used to remove a table from a database?",
        options: ["DELETE", "DROP", "REMOVE", "CLEAR"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which of the following is a valid ACID property of a transaction?",
        options: ["Atomicity", "Clarity", "Duplication", "Isolation Level"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "What type of join returns all records when there is a match in either left or right table?",
        options: ["INNER JOIN", "OUTER JOIN", "LEFT JOIN", "FULL OUTER JOIN"],
        correctAnswerIndex: 3,
      },
      {
        question:
          "Which index type allows fast access to rows using key values?",
        options: [
          "Hash Index",
          "B-tree Index",
          "Bitmap Index",
          "Clustered Index",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Which normal form eliminates transitive dependencies?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which SQL command is used to remove a table from a database?",
        options: ["DELETE", "DROP", "REMOVE", "CLEAR"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which of the following is a valid ACID property of a transaction?",
        options: ["Atomicity", "Clarity", "Duplication", "Isolation Level"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "What type of join returns all records when there is a match in either left or right table?",
        options: ["INNER JOIN", "OUTER JOIN", "LEFT JOIN", "FULL OUTER JOIN"],
        correctAnswerIndex: 3,
      },
      {
        question:
          "Which index type allows fast access to rows using key values?",
        options: [
          "Hash Index",
          "B-tree Index",
          "Bitmap Index",
          "Clustered Index",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "What does the SELECT DISTINCT command do?",
        options: [
          "Deletes duplicate columns",
          "Displays only unique rows",
          "Joins two tables",
          "Sorts the result",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Which of these is NOT a valid SQL constraint?",
        options: ["NOT NULL", "DEFAULT", "EXISTS", "CHECK"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "What is the output of a cross join between two tables of 3 and 4 rows?",
        options: ["7 rows", "12 rows", "3 rows", "4 rows"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which of the following is a DDL command?",
        options: ["INSERT", "UPDATE", "ALTER", "SELECT"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which operation in relational algebra is used to rename attributes?",
        options: [
          "π (Projection)",
          "σ (Selection)",
          "ρ (Rename)",
          "× (Cartesian Product)",
        ],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which schedule preserves both serializability and recoverability?",
        options: ["Serializable", "Strict", "Cascadeless", "All of the above"],
        correctAnswerIndex: 3,
      },
      {
        question: "Which isolation level allows non-repeatable reads?",
        options: [
          "Read Uncommitted",
          "Read Committed",
          "Repeatable Read",
          "Serializable",
        ],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which type of lock prevents both read and write operations by others?",
        options: ["Shared Lock", "Exclusive Lock", "Read Lock", "Write Lock"],
        correctAnswerIndex: 1,
      },
      {
        question: "In ER modeling, what does a diamond represent?",
        options: ["Entity", "Attribute", "Relationship", "Primary Key"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which of the following helps in recovering a database after crash?",
        options: ["Buffer pool", "Transaction log", "Scheduler", "Parser"],
        correctAnswerIndex: 1,
      },
      {
        question: "What is a surrogate key?",
        options: [
          "A key used in place of the primary key for security",
          "An artificial key created to uniquely identify rows",
          "Another name for a foreign key",
          "A key generated from a hash function",
        ],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which command is used to revoke privileges from a user in SQL?",
        options: ["REMOVE", "REVOKE", "ROLLBACK", "DELETE"],
        correctAnswerIndex: 1,
      },
      {
        question: "What is a foreign key?",
        options: [
          "Key in a table that points to the primary key in another table",
          "A unique key in the same table",
          "A temporary key created during joins",
          "A secondary index",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Which of the following is true about 2NF?",
        options: [
          "It removes transitive dependency",
          "It removes partial dependency",
          "It is the same as 3NF",
          "It requires candidate keys",
        ],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which language is used to define the structure of a database schema?",
        options: ["DML", "DDL", "DCL", "TCL"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which anomaly is caused due to data redundancy?",
        options: [
          "Deletion anomaly",
          "Insertion anomaly",
          "Update anomaly",
          "All of the above",
        ],
        correctAnswerIndex: 3,
      },
      {
        question:
          "Which SQL clause is used to group rows that have the same values?",
        options: ["ORDER BY", "GROUP BY", "HAVING", "WHERE"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which operation violates referential integrity?",
        options: [
          "Inserting a row with a non-existing foreign key reference",
          "Inserting a duplicate primary key",
          "Inserting a NULL into a NOT NULL column",
          "Dropping a table",
        ],
        correctAnswerIndex: 0,
      },
      {
        question:
          "Which file contains information about changes to the database?",
        options: ["Redo log", "Undo file", "Temp file", "Control file"],
        correctAnswerIndex: 0,
      },
      {
        question: "Which of these prevents dirty reads?",
        options: [
          "Read Committed",
          "Read Uncommitted",
          "Repeatable Read",
          "Snapshot Isolation",
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  ds: {
    title: "Data Structures",
    difficulty: "hard",
    questions: [
      {
        question: "Which data structure is used in recursive function calls?",
        options: ["Queue", "Array", "Linked List", "Stack"],
        correctAnswerIndex: 3,
      },
      {
        question: "Which traversal method is used in Depth First Search (DFS)?",
        options: ["Level Order", "Inorder", "Preorder", "Backtracking"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which sorting algorithm has the best average case performance?",
        options: [
          "Bubble Sort",
          "Merge Sort",
          "Insertion Sort",
          "Selection Sort",
        ],
        correctAnswerIndex: 1,
      },
      {
        question:
          "What is the time complexity of binary search in a sorted array?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which data structure allows constant time insertion and deletion from both ends?",
        options: ["Stack", "Queue", "Deque", "Tree"],
        correctAnswerIndex: 2,
      },
      {
        question: "Which data structure is used in recursive function calls?",
        options: ["Queue", "Array", "Linked List", "Stack"],
        correctAnswerIndex: 3,
      },
      {
        question: "Which traversal method is used in Depth First Search (DFS)?",
        options: ["Level Order", "Inorder", "Preorder", "Backtracking"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which sorting algorithm has the best average case performance?",
        options: [
          "Bubble Sort",
          "Merge Sort",
          "Insertion Sort",
          "Selection Sort",
        ],
        correctAnswerIndex: 1,
      },
      {
        question:
          "What is the time complexity of binary search in a sorted array?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which data structure allows constant time insertion and deletion from both ends?",
        options: ["Stack", "Queue", "Deque", "Tree"],
        correctAnswerIndex: 2,
      },
      {
        question: "Which data structure is used for BFS traversal of graphs?",
        options: ["Stack", "Queue", "Heap", "Deque"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which of the following is not a stable sorting algorithm?",
        options: [
          "Merge Sort",
          "Bubble Sort",
          "Insertion Sort",
          "Selection Sort",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "What is the space complexity of DFS using adjacency list?",
        options: ["O(V + E)", "O(V²)", "O(E²)", "O(log V)"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "Which algorithm is used to find shortest paths from a source to all vertices in a weighted graph?",
        options: ["Prim's", "Dijkstra’s", "Kruskal’s", "Floyd-Warshall"],
        correctAnswerIndex: 1,
      },
      {
        question: "What is the time complexity of heap sort?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which data structure supports LIFO behavior?",
        options: ["Stack", "Queue", "Array", "Tree"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "Which of the following problems is solved using dynamic programming?",
        options: ["Merge Sort", "0/1 Knapsack", "DFS", "Binary Search"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which hashing technique handles collisions by probing?",
        options: [
          "Separate Chaining",
          "Linear Probing",
          "Double Hashing",
          "Both B & C",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Which tree traversal is used in expression tree evaluation?",
        options: ["Inorder", "Preorder", "Postorder", "Level Order"],
        correctAnswerIndex: 2,
      },
      {
        question: "Which algorithm is used to find minimum spanning tree?",
        options: ["Dijkstra", "Floyd-Warshall", "Kruskal", "Bellman-Ford"],
        correctAnswerIndex: 2,
      },
      {
        question: "What is the worst-case time complexity of quicksort?",
        options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        correctAnswerIndex: 0,
      },
      {
        question: "In a max-heap, which node has the maximum value?",
        options: ["Root", "Left Child", "Right Child", "Leaf"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "What is the time complexity of inserting an element in a Binary Search Tree (average case)?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which operation is not allowed on singly linked list efficiently?",
        options: [
          "Insertion at head",
          "Traversal",
          "Deletion from tail",
          "Search",
        ],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which problem can be solved using the sliding window technique?",
        options: [
          "Merge Two Sorted Arrays",
          "Longest Substring Without Repeating Characters",
          "Inorder Traversal",
          "Binary Search",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Which of the following is used in backtracking algorithms?",
        options: ["Greedy", "DFS", "Dynamic Programming", "BFS"],
        correctAnswerIndex: 1,
      },
      {
        question: "What is the recurrence relation of merge sort?",
        options: [
          "T(n) = T(n/2) + n",
          "T(n) = 2T(n/2) + n",
          "T(n) = T(n-1) + 1",
          "T(n) = T(n/2) + 1",
        ],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which of the following is NOT a characteristic of greedy algorithms?",
        options: [
          "Optimal Substructure",
          "Overlapping Subproblems",
          "Greedy Choice Property",
          "Locally Optimal Choice",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "In trie data structure, each node represents?",
        options: [
          "Complete string",
          "Set of strings",
          "A single character",
          "A number",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "In segment trees, what is the purpose of each node?",
        options: [
          "Stores leaf values only",
          "Stores range sum/product/etc.",
          "Stores parent links",
          "Stores hash values",
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
  mockTest: {
    title: "Full Mock Test",
    difficulty: "medium",
    questions: [
      // Aptitude (10 questions)
      {
        question:
          "A train 180m long is running at 90 km/hr. How long does it take to cross a platform 120m long?",
        options: ["8 seconds", "10 seconds", "12 seconds", "6 seconds"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "A and B can do a job in 12 and 16 days respectively. If they work together, in how many days will it be done?",
        options: ["6.86", "6.9", "7", "7.2"],
        correctAnswerIndex: 3,
      },
      {
        question:
          "If the average of 10 numbers is 23, what is the new average if each number is increased by 4?",
        options: ["27", "24", "25", "26"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "If the price of a shirt increases from ₹400 to ₹460, what is the % increase?",
        options: ["15%", "10%", "12%", "20%"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "The average of 20 numbers is zero. At most how many may be greater than zero?",
        options: ["0", "1", "19", "20"],
        correctAnswerIndex: 2,
      },
      {
        question: "If 2x – 3y = 6 and 4x + 5y = 20, find x and y.",
        options: [
          "x = 3, y = 0",
          "x = 2, y = -2",
          "x = 4, y = 1",
          "x = 5, y = -1",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "What will come in place of ?: 144 : 12 :: 169 : ?",
        options: ["11", "13", "14", "15"],
        correctAnswerIndex: 1,
      },
      {
        question: "What is the sum of the first 20 natural numbers?",
        options: ["210", "220", "200", "230"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "What is the compound interest on ₹5000 for 2 years at 10% p.a.?",
        options: ["₹1000", "₹1050", "₹1100", "₹1155"],
        correctAnswerIndex: 3,
      },
      {
        question: "If 3x + 2 = 17, what is x?",
        options: ["5", "4", "6", "7"],
        correctAnswerIndex: 0,
      },

      // DSA (10 questions)
      {
        question: "Which data structure uses LIFO principle?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctAnswerIndex: 1,
      },
      {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which sorting algorithm is not stable?",
        options: ["Merge Sort", "Bubble Sort", "Quick Sort", "Insertion Sort"],
        correctAnswerIndex: 2,
      },
      {
        question:
          "Which traversal gives postfix expression from a binary expression tree?",
        options: ["Inorder", "Preorder", "Postorder", "Level Order"],
        correctAnswerIndex: 2,
      },
      {
        question: "Which algorithm is used for finding MST?",
        options: ["Dijkstra", "Prim’s", "Floyd-Warshall", "Bellman-Ford"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which of the following is used to detect cycle in a graph?",
        options: ["DFS", "BFS", "Kruskal’s", "Dijkstra"],
        correctAnswerIndex: 0,
      },
      {
        question:
          "Which is the best data structure for implementing priority queue?",
        options: ["Array", "Linked List", "Heap", "BST"],
        correctAnswerIndex: 2,
      },
      {
        question: "What’s the time complexity to insert into a balanced BST?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        correctAnswerIndex: 2,
      },
      {
        question: "Which algorithm is used in 0/1 knapsack?",
        options: [
          "Backtracking",
          "Greedy",
          "Dynamic Programming",
          "Divide and Conquer",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Which data structure is used in BFS?",
        options: ["Stack", "Queue", "Heap", "Deque"],
        correctAnswerIndex: 1,
      },

      // DBMS (10 questions)
      {
        question: "Which of the following is a DDL command?",
        options: ["INSERT", "DELETE", "ALTER", "UPDATE"],
        correctAnswerIndex: 2,
      },
      {
        question: "Which normal form removes partial dependency?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which of these is not a valid SQL constraint?",
        options: ["PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "EXISTS"],
        correctAnswerIndex: 3,
      },
      {
        question: "Which join returns only matching rows?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
        correctAnswerIndex: 0,
      },
      {
        question: "Which isolation level prevents dirty reads?",
        options: [
          "Read Uncommitted",
          "Read Committed",
          "Repeatable Read",
          "Serializable",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Which operation in relational algebra renames attributes?",
        options: ["σ", "π", "×", "ρ"],
        correctAnswerIndex: 3,
      },
      {
        question: "What is a surrogate key?",
        options: [
          "Key from another table",
          "Natural key",
          "Artificial unique key",
          "Duplicate key",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "What is the command to remove a table in SQL?",
        options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"],
        correctAnswerIndex: 2,
      },
      {
        question: "Which schedule avoids cascading rollbacks?",
        options: ["Cascadeless", "Strict", "Serializable", "Recoverable"],
        correctAnswerIndex: 0,
      },
      {
        question: "Which of the following prevents insertion anomaly?",
        options: ["Denormalization", "BCNF", "Redundancy", "NULL Values"],
        correctAnswerIndex: 1,
      },

      // Computer Networks (10 questions)
      {
        question: "Which layer is responsible for process-to-process delivery?",
        options: ["Network", "Transport", "Session", "Application"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which protocol maps IP addresses to MAC addresses?",
        options: ["ICMP", "RARP", "ARP", "DHCP"],
        correctAnswerIndex: 2,
      },
      {
        question: "Which media is NOT guided?",
        options: ["Twisted Pair", "Coaxial", "Fiber Optic", "Microwave"],
        correctAnswerIndex: 3,
      },
      {
        question: "What is the size of an IPv6 address?",
        options: ["32 bits", "64 bits", "128 bits", "256 bits"],
        correctAnswerIndex: 2,
      },
      {
        question: "Which device operates at the Data Link Layer?",
        options: ["Switch", "Router", "Modem", "Hub"],
        correctAnswerIndex: 0,
      },
      {
        question: "Which protocol is used to transfer web pages?",
        options: ["SMTP", "FTP", "HTTP", "DNS"],
        correctAnswerIndex: 2,
      },
      {
        question: "Which IP class provides 254 host addresses?",
        options: ["Class A", "Class B", "Class C", "Class D"],
        correctAnswerIndex: 2,
      },
      {
        question: "Which protocol retrieves emails?",
        options: ["SMTP", "POP3", "IMAP", "DNS"],
        correctAnswerIndex: 2,
      },
      {
        question: "What is DNS used for?",
        options: [
          "Resolve IP to MAC",
          "Routing",
          "Naming domains",
          "Encryption",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Which topology connects every node to every other node?",
        options: ["Star", "Ring", "Mesh", "Bus"],
        correctAnswerIndex: 2,
      },

      // OOPs (10 questions)
      {
        question: "Which principle allows multiple forms of a function?",
        options: [
          "Inheritance",
          "Polymorphism",
          "Encapsulation",
          "Abstraction",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Which principle binds data and methods together?",
        options: [
          "Polymorphism",
          "Abstraction",
          "Encapsulation",
          "Inheritance",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Which keyword prevents a class from being inherited?",
        options: ["final", "static", "const", "private"],
        correctAnswerIndex: 0,
      },
      {
        question: "Runtime polymorphism is achieved using?",
        options: [
          "Overloading",
          "Templates",
          "Virtual Functions",
          "Static Methods",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "What is constructor overloading?",
        options: [
          "Multiple constructors with diff parameters",
          "Constructor calling another",
          "Constructor with same name",
          "Inheritance of constructors",
        ],
        correctAnswerIndex: 0,
      },
      {
        question:
          "Which access modifier makes members visible within the same package?",
        options: ["private", "protected", "public", "default"],
        correctAnswerIndex: 3,
      },
      {
        question: "What does abstraction achieve?",
        options: [
          "Hiding implementation",
          "Binding data",
          "Overloading",
          "Inheritance",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Which keyword is used for inheritance in Java?",
        options: ["inherits", "extends", "super", "implements"],
        correctAnswerIndex: 1,
      },
      {
        question: "Can constructors be overloaded?",
        options: ["Yes", "No", "Only in C++", "Only in Java"],
        correctAnswerIndex: 0,
      },
      {
        question: "Which of these is used for interface implementation?",
        options: ["extends", "inherits", "implements", "interface"],
        correctAnswerIndex: 2,
      },
    ],
  },
};
module.exports = data;
