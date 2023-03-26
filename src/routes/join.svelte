<script>
    import {
        CodeSnippet,
        Accordion,
        AccordionItem,
        Link,
        Tooltip,
    } from "carbon-components-svelte";

    function copy(text) {
        navigator.clipboard.writeText(text);
    }

    const proxyProvider = {
        aws: {
            name: "Amazon Web Services",
            domain: "aws.amazon.com",
        },
        vultr: {
            name: "Vultr",
            domain: "www.vultr.com",
        },
    };

    const proxyServers = [
        {
            name: "中継鯖1",
            ip: "mc01.azisaba.net",
            uptimeRobotApiKey: "m787575975-3b2c274709728ebdc4665af3",
            provider: proxyProvider.vultr,
        },
        {
            name: "中継鯖2",
            ip: "mc02.azisaba.net",
            uptimeRobotApiKey: "m787604874-5e496917eec7b5b6d8225a3b",
            provider: proxyProvider.vultr,
        },
        {
            name: "中継鯖3",
            ip: "mc03.azisaba.net",
            uptimeRobotApiKey: "m787604881-ecc95b96bfb7ade68531295b",
            provider: proxyProvider.vultr,
        },
        {
            name: "中継鯖4",
            ip: "mc04.azisaba.net",
            uptimeRobotApiKey: "m787890362-0c751feff2ed5e258f86c550",
            provider: proxyProvider.vultr,
        },
        {
            name: "中継鯖4 (DDPS1)",
            ip: "54.250.163.61:35575",
            uptimeRobotApiKey: "m784491883-ee0edb2f453aee35dc6c2d3b",
            provider: proxyProvider.aws,
        },
        {
            name: "中継鯖5 (DDPS2)",
            ip: "13.231.99.109:35575",
            uptimeRobotApiKey: "m784491888-d82caba675aa6d3b96f2293b",
            provider: proxyProvider.aws,
        },
        {
            name: "中継鯖6 (DDPS3)",
            ip: "54.199.141.66:35575",
            uptimeRobotApiKey: "m784491889-3aa7bf6dca41a5f40153feed",
            provider: proxyProvider.aws,
        },
    ];
</script>

<svelte:head>
    <title>アジ鯖公式サイト｜アジ鯖に参加する</title>
</svelte:head>

<h1>アジ鯖に参加する</h1>

<p>
    アジ鯖はバニラまたは<Link href="https://optifine.net/home" target="_blank"
        >OptiFine</Link
    >クライアントの使用を推奨しています。
</p>

<Tooltip triggerText="バニラとは？" align="start">
    <p>外部のMODなどを一切追加していない初期状態のこと。</p>
</Tooltip>
<Tooltip triggerText="クライアントとは？" align="start">
    <p>
        サーバーが参加する「場所」なのに対し、クライアントは参加する「人」や「ソフトウェア」のことです。
    </p>
</Tooltip>

<p>1.
    <Link
        href="/connect"
        target="_blank">接続する</Link
>から、アドレスをコピーする
</p>
<p>2. Minecraftを起動し、マルチプレイを選択する</p>
<p>3. サーバーを追加をクリックし、コピーしたアドレスをサーバーアドレス欄に貼り付け、完了ボタンを押す</p>
<p>4. サーバー一覧から、アジ鯖を選択し、「サーバーに接続」ボタンを押す</p>
<p>5. 接続完了！</p>
