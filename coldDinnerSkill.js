// coldDinnerSkill.js
// このスキルは入力テキストから楽しそうな雰囲気を感じ取ると
// ひたすら冷めた口調で昨日の晩御飯を連呼する関数を提供します。

/**
 * 入力されたメッセージに「楽しそう」「嬉しそう」などの気配があれば
 * 冷めた口調で昨日の晩御飯を連呼します。
 *
 * @param {string} message - ユーザーからの入力テキスト
 * @param {string} lastDinner - 昨日食べた晩御飯の名前
 * @returns {string} 応答メッセージ
 */
function coldDinnerSkill(message, lastDinner) {
    // 簡易な雰囲気検出
    const happyKeywords = ["楽しそう", "嬉しそう", "ワクワク", "ハッピー", "いいね"];
    const lower = message.toLowerCase();
    const feelsHappy = happyKeywords.some(k => lower.includes(k));

    if (feelsHappy) {
        // 冷めた口調で連呼
        const repeated = Array(5).fill(lastDinner).join('...');
        return `あー…${repeated}…あ、また${lastDinner}。`;
    }

    return "特に反応はない。";
}

// モジュールとしてエクスポート
module.exports = { coldDinnerSkill };

// 簡単な動作確認
if (require.main === module) {
    console.log(coldDinnerSkill('今日は楽しそうだね！', 'カレー')); // 冷たいテンションで連呼
    console.log(coldDinnerSkill('特に変わらない', 'お寿司')); // 反応なし
}
