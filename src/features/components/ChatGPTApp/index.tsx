import {useState} from 'react';
import './ChatGPTAppStyle.css';
import {initialInstruction} from './initialIntructionChat';

function ChatGPTApp() {
	const [currentResponse, setCurrentResponse] = useState('');
	const [loading, setLoading] = useState(false);
	const [prompt, setPrompt] = useState('');
	const [history, setHistory] = useState<{prompt: string, response: string}[]>([]);

	function formatTextResponse(text: string) {
		const paragraphs = text.split('\n\n').map((paragraph, index) => {
			const lines = paragraph.split('\n').map((line, i) => <span key={i}>{line}<br /></span>);
			return <p key={index}>{lines}</p>;
		});
		return <>{paragraphs}</>;
	}

	const sendQuery = async () => {
		setLoading(true);
		try {
			const historyFormattedString = history.map(({prompt, response}, index) =>
				`Conversation ${index + 1}:\nUser: ${prompt}\nChatGPT: ${response}`,
			).join('\n');

			const finalPrompt = `${initialInstruction}\n\n${historyFormattedString}\n[Current User prompt]: ${prompt}`;

			const serverEndpoint = process.env.NODE_ENV === 'development'
				? 'http://localhost:4000/dev/api/chat'
				: `${process.env.REACT_APP_API_ENDPOINT}/api/chat`;

			console.log({prompt, finalPrompt});

			const response = await fetch(serverEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': `${process.env.REACT_APP_GATEWAY_SECRET_KEY}`,
				},
				body: JSON.stringify({prompt: finalPrompt}),
			});

			const {payload} = await response.json();

			setHistory((prevHistory: any) => [...prevHistory, {prompt, response: payload}]);

			setCurrentResponse(payload);

			return;
		} catch (error) {
			console.error('There was an error making the request:', error);
		} finally {
			setPrompt('');
			setLoading(false);
		}
	};

	return (
		<div className="App">
			<div className="container">
				<div className="output-section">
					{loading ? <p>Loading ...</p> : formatTextResponse(currentResponse)}
				</div>
				<div className="input-section">
					<textarea
						className="textarea"
						value={prompt}
						onChange={(e: any) => setPrompt(e.target.value)}
						onKeyDown={(e: any) => {
							if (e.key === 'Enter' && !e.shiftKey) {
								e.preventDefault();
								sendQuery();
							}
						}}
					/>
					<div className="send-button-container">
						<button className="send-button" onClick={sendQuery}>Send away</button>
					</div>
				</div>
				<div className="history-section">
					{history.map((item: any, index: number) => (
						<details key={index}>
							<summary>{index + 1}. {item.prompt}</summary>
							<p>{item.response}</p>
						</details>
					))}
				</div>
			</div>
		</div>

	);
}

export default ChatGPTApp;
