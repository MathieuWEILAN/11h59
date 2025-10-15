"use client";
import StackedCardsScroll, { CardData } from "@/components/ui/StackedCardsScroll";

const demoCards: CardData[] = [
  {
    id: "card-1",
    title: "First Card",
    description: "This is the first card that will exit to the left with a smooth arc animation when you scroll down.",
    backgroundColor: "#ff6b6b",
    textColor: "#ffffff",
    content: <div className="text-sm opacity-80">Exits Left ←</div>
  },
  {
    id: "card-2",
    title: "Second Card",
    description: "This is the second card that will exit to the right with a smooth arc animation when you scroll further.",
    backgroundColor: "#4ecdc4",
    textColor: "#ffffff",
    content: <div className="text-sm opacity-80">Exits Right →</div>
  },
  {
    id: "card-3",
    title: "Third Card",
    description: "This is the third card that will exit to the left with a smooth arc animation when you continue scrolling.",
    backgroundColor: "#45b7d1",
    textColor: "#ffffff",
    content: <div className="text-sm opacity-80">Exits Left ←</div>
  },
  {
    id: "card-4",
    title: "Fourth Card",
    description: "This is the fourth card that will exit to the right with a smooth arc animation when you scroll more.",
    backgroundColor: "#96ceb4",
    textColor: "#ffffff",
    content: <div className="text-sm opacity-80">Exits Right →</div>
  },
  {
    id: "card-5",
    title: "Final Card",
    description: "This is the final card that stays visible and never exits the screen. It remains here as the anchor point.",
    backgroundColor: "#ffeaa7",
    textColor: "#2d3436",
    content: <div className="text-sm opacity-80">Stays Visible ✓</div>
  }
];

export default function StackedCardsDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stacked Cards Scroll Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scroll down to see the cards animate out one by one with smooth arc trajectories.
            Cards alternate between left and right exits, with the last card remaining visible.
          </p>
        </div>

        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 px-6 py-3 rounded-lg">
            <p className="text-blue-800 font-medium">
              👇 Scroll down to start the animation
            </p>
          </div>
        </div>
      </div>

      <StackedCardsScroll cards={demoCards} />

      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Animation Complete
        </h2>
        <p className="text-gray-600 mb-8">
          You've seen all the cards animate out except the last one, which remains visible.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg max-w-md mx-auto">
          <h3 className="font-bold mb-2">Features Demonstrated:</h3>
          <ul className="text-left space-y-1 text-sm">
            <li>• Alternating left/right arc exits</li>
            <li>• Smooth scroll-triggered animations</li>
            <li>• Last card remains visible</li>
            <li>• Performant transform-based animations</li>
            <li>• Responsive design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}