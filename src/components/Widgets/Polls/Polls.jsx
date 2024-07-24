import React, { useEffect, useState } from "react";
import styles from "./Polls.module.css";

const Polls = () => {
  const [pollData, setPollData] = useState(() => {
    const savedData = localStorage.getItem("pollData");
    return savedData
      ? JSON.parse(savedData)
      : {
          poll1: {
            option1: 0,
            option2: 0,
            option3: 0,
            option4: 0,
            totalVotes: 0,
          },
          poll2: {
            option1: 0,
            option2: 0,
            option3: 0,
            option4: 0,
            totalVotes: 0,
          },
          poll3: {
            option1: 0,
            option2: 0,
            option3: 0,
            option4: 0,
            totalVotes: 0,
          },
          poll4: {
            option1: 0,
            option2: 0,
            option3: 0,
            option4: 0,
            totalVotes: 0,
          },
        };
  });

  const [userVotes, setUserVotes] = useState(() => {
    const savedVotes = localStorage.getItem("userVotes");
    return savedVotes ? JSON.parse(savedVotes) : {};
  });

  useEffect(() => {
    localStorage.setItem("pollData", JSON.stringify(pollData));
    localStorage.setItem("userVotes", JSON.stringify(userVotes));
  }, [pollData, userVotes]);

  const handleOptionClick = (poll, option) => {
    if (!userVotes[poll]) {
      setPollData((prevPollData) => {
        const updatedPoll = { ...prevPollData[poll] };
        updatedPoll[option]++;
        updatedPoll.totalVotes++;
        return { ...prevPollData, [poll]: updatedPoll };
      });
      setUserVotes((prevUserVotes) => ({
        ...prevUserVotes,
        [poll]: true,
      }));
    } else {
      alert("You have already voted in this poll.");
    }
  };

  const updateResults = (question) => {
    const totalVotes = pollData[question].totalVotes;
    const results = [];
    for (const [key, value] of Object.entries(pollData[question])) {
      if (key !== "totalVotes") {
        const percentage = totalVotes
          ? ((value / totalVotes) * 100).toFixed(2)
          : 0;
        results.push(
          `${key.replace("option", "Option ")}: ${percentage}% (${value} votes)`
        );
      }
    }
    return results;
  };

  const polls = ["poll1", "poll2", "poll3", "poll4"];

  return (
    <div className={styles.container}>
      {polls.map((poll) => (
        <div key={poll} className={styles.pollContainer} id={poll}>
          <h1>
            {poll === "poll1"
              ? "What's your favorite aspect of our company?"
              : poll === "poll2"
              ? "How satisfied are you with your work-life balance?"
              : poll === "poll3"
              ? "What do you think about our health benefits?"
              : "Which company value do you align with most?"}
          </h1>
          <div
            className={styles.option}
            data-question={poll}
            data-value="option1"
            onClick={() => handleOptionClick(poll, "option1")}
          >
            {poll === "poll1"
              ? "Work Environment"
              : poll === "poll2"
              ? "Very Satisfied"
              : poll === "poll3"
              ? "Excellent"
              : "Integrity"}
          </div>
          <div
            className={styles.option}
            data-question={poll}
            data-value="option2"
            onClick={() => handleOptionClick(poll, "option2")}
          >
            {poll === "poll1"
              ? "Team Collaboration"
              : poll === "poll2"
              ? "Satisfied"
              : poll === "poll3"
              ? "Good"
              : "Innovation"}
          </div>
          <div
            className={styles.option}
            data-question={poll}
            data-value="option3"
            onClick={() => handleOptionClick(poll, "option3")}
          >
            {poll === "poll1"
              ? "Career Opportunities"
              : poll === "poll2"
              ? "Neutral"
              : poll === "poll3"
              ? "Fair"
              : "Excellence"}
          </div>
          <div
            className={styles.option}
            data-question={poll}
            data-value="option4"
            onClick={() => handleOptionClick(poll, "option4")}
          >
            {poll === "poll1"
              ? "Company Culture"
              : poll === "poll2"
              ? "Dissatisfied"
              : poll === "poll3"
              ? "Poor"
              : "Customer Centricity"}
          </div>
          <div
            id={`results_${poll}`}
            className={pollData[poll].totalVotes > 0 ? "" : styles.hidden}
          >
            <h2>Results:</h2>
            {updateResults(poll).map((result, index) => (
              <div
                key={index}
                className={styles.result}
                id={`result_${poll}_option${index + 1}`}
              >
                {result}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Polls;
