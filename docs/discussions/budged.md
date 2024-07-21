# 料金をメモっておく

検討するとき、これを参照すれば一覧になっていてうれしい。

<script setup>

const MEMBER_NUM = 5;

// 合計算出のためにJSで管理
const tableRows = [
  {
    text: "星の降る森 ログコテージシグナス",
    price: 41800,
    references: [
      {
        text: "シーズンカレンダー",
        link: "https://www.star-forest.com/pages/58?b1316_date=2024-08",
      },
      {
        text: "料金表",
        link: "https://www.star-forest.com/pages/74/#:~:text=%E8%BF%BD%E5%8A%A0%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82-,%E3%83%AD%E3%82%B0%E3%82%B3%E3%83%86%E3%83%BC%E3%82%B8%E3%80%8C%E3%82%B7%E3%82%B0%E3%83%8A%E3%82%B9%E3%80%8D,-%E3%80%901%E6%A3%9F6",
      },
    ],
  },
  {
    text: "バーベキューグリルセット",
    price: 1700,
    references: [
      {
        text: "レンタル品一覧",
        link: "https://www.star-forest.com/pages/41/#:~:text=%EF%BF%A5500-,%E3%83%90%E3%83%BC%E3%83%99%E3%82%AD%E3%83%A5%E3%83%BC%E3%82%B0%E3%83%AA%E3%83%AB%E3%82%BB%E3%83%83%E3%83%88,-%E2%80%BB%E9%89%84%E6%9D%BF%E3%83%BB%E7%B6%B2%E4%BB%98",
      },
    ],
  },
  {
    text: "焚き火台",
    price: 1200,
    references: [
      {
        text: "レンタル品一覧",
        link: "https://www.star-forest.com/pages/41/#:~:text=%EF%BF%A5200-,%E7%84%9A%E3%81%8D%E7%81%AB%E5%8F%B0,-%EF%BF%A51%2C200",
      },
    ],
  },
  {
    text: "電気炊飯器",
    price: 1000,
    references: [
      {
        text: "レンタル品一覧",
        link: "https://www.star-forest.com/pages/41/#:~:text=%EF%BF%A5250-,%E9%9B%BB%E6%B0%97%E7%82%8A%E9%A3%AF%E5%99%A8,-%EF%BF%A51%2C000",
      },
    ],
  },
  {
    text: "包丁・まな板セット",
    price: 300,
    references: [
      {
        text: "レンタル品一覧",
        link: "https://www.star-forest.com/pages/41/#:~:text=%EF%BF%A5200-,%E5%8C%85%E4%B8%81%E3%83%BB%E3%81%BE%E3%81%AA%E6%9D%BF%E3%82%BB%E3%83%83%E3%83%88,-%EF%BF%A5300",
      },
    ],
  },
  {
    text: "調理器具各種",
    price: 100,
    references: [
      {
        text: "レンタル品一覧",
        link: "https://www.star-forest.com/pages/41/#:~:text=%EF%BF%A5200-,%E8%AA%BF%E7%90%86%E5%99%A8%E5%85%B7,-%E5%90%84%E7%A8%AE",
      },
    ],
  },
  {
    text: "鍋",
    price: 300,
    references: [
      {
        text: "レンタル品一覧",
        link: "https://www.star-forest.com/pages/41/#:~:text=%EF%BF%A5500-,%E9%8D%8B,-%EF%BF%A5300",
      },
    ],
  },
  {
    text: "カセットコンロ(ガスなし)",
    price: 700,
    references: [
      {
        text: "レンタル品一覧",
        link: "https://www.star-forest.com/pages/41/#:~:text=%EF%BF%A5100-,%E3%82%AB%E3%82%BB%E3%83%83%E3%83%88%E3%82%B3%E3%83%B3%E3%83%AD,-%EF%BC%88%E3%82%AC%E3%82%B9%E3%81%AA%E3%81%97%EF%BC%89",
      },
    ],
  },
  {
    text: "発知渓流釣りセンター",
    price: 2500 * MEMBER_NUM,
    references: [
      {
        text: "星の降る森 -アクティビティ",
        link: "https://www.star-forest.com/pages/22/#block242:~:text=%E3%80%90-,%E7%99%BA%E7%9F%A5%E6%B8%93%E6%B5%81%E9%87%A3%E3%82%8A%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC,-%E3%80%91%0A%0A3%E6%9C%88",
      },
    ],
  },
  {
    text: "高速料金(往復)",
    price: 5430 * 2,
    references: [
        {
            text: "Navitime",
            link: "https://www.navitime.co.jp/highway/route/searchlist?depIcsapa=%E7%89%9B%E4%B9%85%E9%98%BF%E8%A6%8BIC%EF%BC%88%E9%A6%96%E9%83%BD%E5%9C%8F%E4%B8%AD%E5%A4%AE%E9%80%A3%E7%B5%A1%E8%87%AA%E5%8B%95%E8%BB%8A%E9%81%93%EF%BC%88%E8%8C%85%E3%83%B6%E5%B4%8E%EF%BD%9E%E5%A4%A7%E6%A0%84%EF%BC%89%EF%BC%89&depIcId=112020&depIcType=ic&arvIcsapa=%E6%B2%BC%E7%94%B0IC%EF%BC%88%E9%96%A2%E8%B6%8A%E8%87%AA%E5%8B%95%E8%BB%8A%E9%81%93%EF%BC%89&arvIcId=20180#result-head-0"
        }
    ]
  }
];

function formatCurrency(number) {
    // 数値を文字列に変換し、3桁ごとにカンマを挿入（アメリカ英語のロケールを使用）
    const formattedNumber = number.toLocaleString('en-US');
    return `${formattedNumber}`;
}

// 合計金額を算出
// 引数にtrueを渡すと料金/人の合計を算出する
function totalFee(isPerPerson = false){
    const prices = tableRows.map(item => isPerPerson ? item.price / MEMBER_NUM : item.price);
    return prices.reduce((sum, price) => sum + price, 0)
}

</script>

<table tabindex="0">
    <thead>
        <tr>
            <th>商品名</th>
            <th>料金</th>
            <th>料金/人</th>
            <th>リファレンス</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="row in tableRows">
            <td>{{ row.text }}</td>
            <td>{{ formatCurrency(row.price) }}</td>
            <td>{{ formatCurrency(row.price / MEMBER_NUM) }}</td>
            <td>
                <span v-for="(reference, index) in row.references">
                    <a :href="reference.link" target="_blank" rel="noreferrer">{{ reference.text }}</a><span v-if="index < row.references.length - 1">, </span>
                </span>
            </td>
        </tr>
    </tbody>
</table>

**合計**: {{ formatCurrency(totalFee()) }} 円 ({{ formatCurrency(totalFee(true)) }} 円/人)
