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

    const proxyServers = [
        {
            name: "中継サーバー ランダム選択",
            ip: "mc.azisaba.net",
            uptimeRobotApiKey: "m789239905-6a57f98e80dc6ee8a45f3696",
            note: " BE接続に利用可"
        },
        {
            name: "中継サーバー1",
            ip: "mc01.azisaba.net",
            uptimeRobotApiKey: "m787575975-3b2c274709728ebdc4665af3",
            note: ""
        },
        {
            name: "中継サーバー2",
            ip: "mc02.azisaba.net",
            uptimeRobotApiKey: "m787604874-5e496917eec7b5b6d8225a3b",
            note: ""
        },
        {
            name: "中継サーバー3",
            ip: "mc03.azisaba.net",
            uptimeRobotApiKey: "m787604881-ecc95b96bfb7ade68531295b",
            note: ""
        },
        {
            name: "中継サーバー4",
            ip: "mc04.azisaba.net",
            uptimeRobotApiKey: "m790637201-5612b10e492fcfe2b9e9e7a4",
            note: ""
        },
        {
            name: "中継サーバー5",
            ip: "mc05.azisaba.net",
            uptimeRobotApiKey: "m789060217-2144fdfa2893ca6f0f3dfc45",
            note: ""
        },
        {
            name: "中継サーバー6",
            ip: "mc06.azisaba.net",
            uptimeRobotApiKey: "m790637241-516efc38228a41791e5f53ee",
            note: ""
        },
        {
            name: "中継サーバー7",
            ip: "mc07.azisaba.net",
            uptimeRobotApiKey: "m790637252-5db4486c4f211c5d89e00dbe",
            note: ""
        },
        {
            name: "中継サーバー8",
            ip: "mc08.azisaba.net",
            uptimeRobotApiKey: "m790637272-72f31ca3e8868b76390854cf",
            note: ""
        },
        {
            name: "中継サーバー9",
            ip: "mc09.azisaba.net",
            uptimeRobotApiKey: "m790637278-2d1fcf42a2aa95ed003aa899",
            note: ""
        },
        {
            name: "中継サーバー NoBlock",
            ip: "noblock.azisaba.net",
            uptimeRobotApiKey: "m789239905-6a57f98e80dc6ee8a45f3696",
            note: "IPアドレスの制限がされていません。"
        },
    ];
</script>

<svelte:head>
    <title>アジ鯖公式サイト｜接続</title>
</svelte:head>

<h1>接続する</h1>

<h4>公開IPアドレス</h4>

<CodeSnippet on:click={() => copy("azisaba.net")}>azisaba.net</CodeSnippet>

<h4>または {proxyServers.length} 台のプロキシサーバーのいずれかに接続</h4>

<Accordion align="start">
    {#each proxyServers as server}
        <AccordionItem>
            <div
                slot="title"
                style="display: flex; justify-content: space-between;"
            >
                {server.name}
                <img
                    alt={server.name}
                    src="https://badgen.net/uptime-robot/status/{server.uptimeRobotApiKey}"
                    style="margin-right: var(--cds-layout-01);"
                />
            </div>

            <p>IPアドレス</p>
            <CodeSnippet on:click={() => copy(server.ip)}
                >{server.ip}</CodeSnippet
            >
            <p>備考</p>
            {server.note}
        </AccordionItem>
    {/each}
</Accordion>

