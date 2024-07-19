# 料金をメモっておく

検討するとき、これを参照すれば一覧になっていてうれしい。

<script setup>

const MEMBER_NUM = 5;

// 合計算出のためにJSで管理
const table = {
    cygnus: {
        text: "ログコテージシグナス",
        price: 41800,
    },
    bbqGrillSet: {
        text: "バーベキューグリルセット",
        price: 1700,
    },
    bonfireStand: {
        text: "焚き火台",
        price: 1200,
    },
    riceCooker: {
        text: "電気炊飯器",
        price: 1000,
    },
    knifeAndCuttingBoardSet: {
        text: "包丁・まな板セット",
        price: 300,
    },
    cookingUtensils: {
        text: "調理器具各種",
        price: 100,
    },
    pot: {
        text: "鍋",
        price: 300,
    },
    gasStove: {
        text: "カセットコンロ(ガスなし)",
        price: 700,
    },
    fishingCenter: {
        text: "発知渓流釣りセンター",
        pricePerPerson: 2500,
    }
};

function formatCurrency(number) {
    // 数値を文字列に変換し、3桁ごとにカンマを挿入（アメリカ英語のロケールを使用）
    const formattedNumber = number.toLocaleString('en-US');
    // 先頭に「￥」を追加
    return `${formattedNumber}`;
}

</script>

| 商品名 | 料金 | 料金/人 | リファレンス |
| --- | --- | --- | --- |
| {{ table.cygnus.text }} | {{ formatCurrency(table.cygnus.price) }} | {{ formatCurrency(table.cygnus.price / MEMBER_NUM)}} | [シーズンカレンダー](https://www.star-forest.com/pages/58?b1316_date=2024-08), [料金表](https://www.star-forest.com/pages/74/#:~:text=%E8%BF%BD%E5%8A%A0%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82-,%E3%83%AD%E3%82%B0%E3%82%B3%E3%83%86%E3%83%BC%E3%82%B8%E3%80%8C%E3%82%B7%E3%82%B0%E3%83%8A%E3%82%B9%E3%80%8D,-%E3%80%901%E6%A3%9F6)|
| {{ table.bbqGrillSet.text }} | {{ formatCurrency(table.bbqGrillSet.price) }} | {{ formatCurrency(table.bbqGrillSet.price / MEMBER_NUM)}} | [レンタル品一覧](https://www.star-forest.com/pages/41/#:~:text=%EF%BF%A5500-,%E3%83%90%E3%83%BC%E3%83%99%E3%82%AD%E3%83%A5%E3%83%BC%E3%82%B0%E3%83%AA%E3%83%AB%E3%82%BB%E3%83%83%E3%83%88,-%E2%80%BB%E9%89%84%E6%9D%BF%E3%83%BB%E7%B6%B2%E4%BB%98) |
| {{ table.bonfireStand.text }} | {{ formatCurrency(table.bonfireStand.price) }} | {{ formatCurrency(table.bonfireStand.price / MEMBER_NUM)}} | [レンタル品一覧](https://www.star-forest.com/pages/41/#:~:text=%EF%BF%A5200-,%E7%84%9A%E3%81%8D%E7%81%AB%E5%8F%B0,-%EF%BF%A51%2C200) |
| {{ table.riceCooker.text }} | {{ formatCurrency(table.riceCooker.price) }} | {{ formatCurrency(table.riceCooker.price / MEMBER_NUM)}} | [レンタル品一覧](https://www.star-forest.com/pages/41/#:~:text=%EF%BF%A5250-,%E9%9B%BB%E6%B0%97%E7%82%8A%E9%A3%AF%E5%99%A8,-%EF%BF%A51%2C000) |
| {{ table.knifeAndCuttingBoardSet.text }} | {{ formatCurrency(table.knifeAndCuttingBoardSet.price) }} | {{ formatCurrency(table.knifeAndCuttingBoardSet.price / MEMBER_NUM)}} | [レンタル品一覧](https://www.star-forest.com/pages/41/#:~:text=%EF%BF%A5200-,%E5%8C%85%E4%B8%81%E3%83%BB%E3%81%BE%E3%81%AA%E6%9D%BF%E3%82%BB%E3%83%83%E3%83%88,-%EF%BF%A5300) |
| {{ table.cookingUtensils.text }} | {{ formatCurrency(table.cookingUtensils.price) }} | {{ formatCurrency(table.cookingUtensils.price / MEMBER_NUM)}} | [レンタル品一覧](https://www.star-forest.com/pages/41/#:~:text=%EF%BF%A5200-,%E8%AA%BF%E7%90%86%E5%99%A8%E5%85%B7,-%E5%90%84%E7%A8%AE) |
| {{ table.pot.text }} | {{ formatCurrency(table.pot.price) }} | {{ formatCurrency(table.pot.price / MEMBER_NUM)}} | [レンタル品一覧](https://www.star-forest.com/pages/41/#:~:text=%EF%BF%A5500-,%E9%8D%8B,-%EF%BF%A5300) |
| {{ table.gasStove.text }} | {{ formatCurrency(table.gasStove.price) }} | {{ formatCurrency(table.gasStove.price / MEMBER_NUM)}} | [レンタル品一覧](https://www.star-forest.com/pages/41/#:~:text=%EF%BF%A5100-,%E3%82%AB%E3%82%BB%E3%83%83%E3%83%88%E3%82%B3%E3%83%B3%E3%83%AD,-%EF%BC%88%E3%82%AC%E3%82%B9%E3%81%AA%E3%81%97%EF%BC%89) |
| {{ table.fishingCenter.text }} | - | {{ formatCurrency(table.fishingCenter.pricePerPerson) }} | [星の降る森 -アクティビティ](https://www.star-forest.com/pages/22/#block242:~:text=%E3%80%90-,%E7%99%BA%E7%9F%A5%E6%B8%93%E6%B5%81%E9%87%A3%E3%82%8A%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC,-%E3%80%91%0A%0A3%E6%9C%88) |
