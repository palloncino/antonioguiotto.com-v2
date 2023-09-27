import {useState} from 'react';

function ChatGPTApp() {
	const [currentResponse, setCurrentResponse] = useState('');
	const [loading, setLoading] = useState(false);
	const [prompt, setPrompt] = useState(undefined);

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
			const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/chat`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': `${process.env.REACT_APP_GATEWAY_SECRET_KEY}`,
				},
				body: JSON.stringify({
					messages: [
						{role: 'system', content: 'You are a helpful assistant.'},
					],
					model: 'gpt-3.5-turbo',
					prompt,
				}),
			});

			const {payload} = await response.json();
			return setCurrentResponse(payload);
		} catch (error) {
			console.error('There was an error making the request:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="App">
			<div className="container">
				<h1 className="">Chatgpt Custom App</h1>
				<textarea
					className=""
					onChange={(e: any) => setPrompt(e.target.value)}
				/>
				<button className="" onClick={sendQuery}>
          Send away
				</button>
				<p className={loading ? 'text-muted' : ''}>
					{loading ? 'Loading ...' : formatTextResponse(currentResponse)}
				</p>
			</div>
		</div>
	);
}

export default ChatGPTApp;
