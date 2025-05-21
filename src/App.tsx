import './App.css';

export function App() {
    let sab;
    try {
        sab = new SharedArrayBuffer(16).byteLength === 16;
    } catch (e) {
        console.error(e);
        sab = false;
    }

    return (
        <>
            <h1>Application Test</h1>
            <p>There&apos;s nothing here yet! Sorry!</p>
            Also, the COI hack { sab ? 'seems to have worked! Yay!' : 'might be broken... *sigh*' }
        </>
    );
}
