'use client'

import { useState, useCallback, useEffect } from 'react'
import dynamic from 'next/dynamic'
import NameInput from '../components/NameInput'
import NameList from '../components/NameList'

const Confetti = dynamic(() => import('react-confetti'), { ssr: false })

export default function Home() {
  const [names, setNames] = useState<string[]>([])
  const [isRaffling, setIsRaffling] = useState(false)
  const [highlightedName, setHighlightedName] = useState<string>('')
  const [winner, setWinner] = useState<string>('')
  const [showConfetti, setShowConfetti] = useState(false)

  const addName = (name: string) => {
    if (name.trim() === '') return
    if (names.includes(name.trim())) return
    setNames([...names, name.trim()])
  }

  const addNames = (newNames: string[]) => {
    const uniqueNames = newNames.filter(
      name => name.trim() !== '' && !names.includes(name.trim())
    );
    if (uniqueNames.length > 0) {
      setNames([...names, ...uniqueNames]);
    }
  };

  const removeName = (nameToRemove: string) => {
    setNames(names.filter(name => name !== nameToRemove))
  }

  const startRaffle = useCallback(async () => {
    if (names.length < 2 || isRaffling) return;
    setIsRaffling(true);
    setWinner('');

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    
    // Create a local copy of names to work with
    let currentNames = [...names];
    
    while (currentNames.length > 1) {
      // Highlight loop for current round
      for (let i = 0; i < 10; i++) {
        for (const name of currentNames) {
          setHighlightedName(name);
          await delay(100);
        }
      }

      // Eliminate one name
      const eliminatedIndex = Math.floor(Math.random() * currentNames.length);
      const eliminatedName = currentNames[eliminatedIndex];
      setHighlightedName(eliminatedName);
      await delay(1000);
      
      if (currentNames.length === 2) {
        // Final round - set the other name as winner
        const winner = currentNames.find(name => name !== eliminatedName)!;
        setWinner(winner);
        setShowConfetti(true);
        setNames([winner]);
        break;
      } else {
        // Remove eliminated name and continue
        currentNames = currentNames.filter(name => name !== eliminatedName);
        setNames(currentNames);
        await delay(500); // Brief pause between rounds
      }
    }
    
    setHighlightedName('');
    setIsRaffling(false);
  }, [names]);

  return (
    <main className="min-h-screen p-4 sm:p-8 bg-background">
      <div className="max-w-[90%] w-[1400px] mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
          Random Name Picker
        </h1>
        <div className="space-y-6">
          <NameInput onAddName={addName} onAddNames={addNames} />
          
          {names.length > 0 && (
            <button
              onClick={startRaffle}
              disabled={isRaffling || names.length < 2}
              className="w-full py-4 bg-success text-white rounded-xl hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-lg"
            >
              {isRaffling ? 'Picking...' : 'Pick a Person'}
            </button>
          )}

          <NameList 
            names={names} 
            highlightedName={highlightedName}
            winner={winner}
          />
        </div>
      </div>
      {showConfetti && <Confetti recycle={false} onConfettiComplete={() => setShowConfetti(false)} />}
    </main>
  )
} 