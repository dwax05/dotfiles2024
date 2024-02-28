# rustc

> ரஸ்ட் கம்பைலர்.
> ரஸ்ட் மொழி மூல கோப்புகளை செயலாக்குகிறது, தொகுக்கிறது மற்றும் இணைக்கிறது.
> மேலும் விவரத்திற்கு: <https://doc.rust-lang.org/rustc>.

- ஒரு கோப்பை தொகுக்கவும்:

`rustc {{முக்கிய_கோப்பு.rs/பாதை}}`

- உகப்பாக்கத்துடன் தொகுக்கவும் (`s` என்பது பைனரி அளவுக்கு உகந்ததாக்கு; `z` என்பது இன்னும் கூடுதலான மேம்படுத்தலுடன் சமம்):

`rustc -C lto -C opt-level={{0|1|2|3|s|z}} {{முக்கிய_கோப்பு.rs/பாதை}}`

- பிழைத்திருத்த தகவலுடன் தொகுக்கவும்:

`rustc -g {{முக்கிய_கோப்பு.rs/பாதை}}`

- ஒரு பிழை செய்தியை விளக்குங்கள்:

`rustc --explain {{பிழை_குறியீடு}}`

- தற்போதைய CPU க்கான கட்டிடக்கலை-குறிப்பிட்ட மேம்படுத்தல்களுடன் தொகுக்கவும்:

`rustc -C target-cpu={{native}} {{முக்கிய_கோப்பு.rs/பாதை}}`

- இலக்கு பட்டியலைக் காண்பி (குறிப்பு: `rustup` ஐப் பயன்படுத்தி ஒரு இலக்கை முதலில் தொகுக்க நீங்கள் சேர்க்க வேண்டும்):

`rustc --print target-list`

- ஒரு குறிப்பிட்ட இலக்கை தொகுக்கவும்:

`rustc --target {{இலக்கு_மூன்று}} {{முக்கிய_கோப்பு.rs/பாதை}}`