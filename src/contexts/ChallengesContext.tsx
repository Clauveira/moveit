import { createContext, ReactNode, useState } from 'react';


interface IChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;

}

interface IChallengeProviderProps {
    children: ReactNode
}

export const challengesContext = createContext({} as IChallengesContextData);

export function ChallengeProvider({ children }: IChallengeProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function levelUp() {
        setLevel(level + 1);
    }
    function startNewChallenge() {
        console.log('New challenge');
    }

    return (
        <challengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge
        }}>
            {children}
        </challengesContext.Provider>
    );
}