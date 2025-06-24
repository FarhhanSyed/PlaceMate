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
    ],
  },
  mockTest: {
    title: "Full Mock Test",
    difficulty: "medium",
    questions: [
      {
        question: "Which layer in OSI model is responsible for routing?",
        options: ["Transport", "Network", "Data Link", "Session"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which keyword in Java is used to create a subclass?",
        options: ["inherits", "extends", "super", "implements"],
        correctAnswerIndex: 1,
      },
      {
        question: "In SQL, which command is used to modify existing records?",
        options: ["ALTER", "UPDATE", "MODIFY", "CHANGE"],
        correctAnswerIndex: 1,
      },
      {
        question:
          "Which algorithm finds the shortest path from a source node to all other nodes?",
        options: ["DFS", "Prim's", "Kruskal's", "Dijkstra's"],
        correctAnswerIndex: 3,
      },
      {
        question: "Which of the following is a non-linear data structure?",
        options: ["Array", "Stack", "Linked List", "Tree"],
        correctAnswerIndex: 3,
      },
    ],
  },
};
module.exports = data;
