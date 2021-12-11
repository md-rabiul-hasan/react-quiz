import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  const shuffle  = (array_oprtions) => {
    let currentIndex = array_oprtions.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array_oprtions[currentIndex], array_oprtions[randomIndex]] = [array_oprtions[randomIndex], array_oprtions[currentIndex]];
    }
  
    return array_oprtions;
  }
  

  useEffect(() => {
    async function fetchQuestions() {
      // database related works
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return shuffle([...prevQuestions, ...Object.values(snapshot.val())]);
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}
