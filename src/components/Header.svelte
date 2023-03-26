<script>
    import {
        Header,
        HeaderUtilities,
        HeaderActionLink,
        HeaderAction,
        HeaderPanelLinks,
        HeaderPanelDivider,
        HeaderPanelLink,
        SideNav,
        SideNavItems,
        SideNavMenu,
        SideNavLink,
        SkipToContent,
    } from "carbon-components-svelte";

    import ChatBot24 from "carbon-icons-svelte/lib/ChatBot24";
    import LogoYoutube24 from "carbon-icons-svelte/lib/LogoYoutube24";
    import LogoTwitter24 from "carbon-icons-svelte/lib/LogoTwitter24";
    import LogoGithub24 from "carbon-icons-svelte/lib/LogoGithub24";

    import ChatBot32 from "carbon-icons-svelte/lib/ChatBot32";
    import LogoYoutube32 from "carbon-icons-svelte/lib/LogoYoutube32";
    import LogoTwitter32 from "carbon-icons-svelte/lib/LogoTwitter32";
    import LogoGithub32 from "carbon-icons-svelte/lib/LogoGithub32";

    import FavoriteFilled32 from "carbon-icons-svelte/lib/FavoriteFilled32";
    import Fish32 from "carbon-icons-svelte/lib/Fish32";
    import Book32 from "carbon-icons-svelte/lib/Book32";
    import PlayOutline32 from "carbon-icons-svelte/lib/PlayOutline32";
    import Locked32 from "carbon-icons-svelte/lib/Locked32";

    import Gift32 from "carbon-icons-svelte/lib/Gift32";
    import Link32 from "carbon-icons-svelte/lib/Link32";
    import HelpDesk32 from "carbon-icons-svelte/lib/HelpDesk32";
    import LogoDiscord24 from "carbon-icons-svelte/lib/LogoDiscord24";
    import LogoDiscord32 from "carbon-icons-svelte/lib/LogoDiscord32";
    import Connect32 from "carbon-icons-svelte/lib/Connect32";
    import StarHalf32 from "carbon-icons-svelte/lib/StarHalf32";
    import WatsonHealthStackedScrolling_1_32 from "carbon-icons-svelte/lib/WatsonHealthStackedScrolling_132";
    import Chat32 from "carbon-icons-svelte/lib/Chat32";
    import Checkbox32 from "carbon-icons-svelte/lib/Checkbox32";

    export let segment;

    const socials = [
        {
            name: "Discord",
            iconMini: LogoDiscord24,
            icon: LogoDiscord32,
            url: "https://discord.gg/azisaba",
        },
        {
            name: "Twitter",
            iconMini: LogoTwitter24,
            icon: LogoTwitter32,
            url: "https://twitter.com/AzisabaNetwork",
        },
        {
            name: "YouTube",
            iconMini: LogoYoutube24,
            icon: LogoYoutube32,
            url: "https://www.youtube.com/channel/UCHkH9_MKql1MFi0MZ_tqQbg",
        },
        {
            name: "GitHub",
            iconMini: LogoGithub24,
            icon: LogoGithub32,
            url: "https://github.com/AzisabaNetwork",
        },
    ];

    const menu = [
        "Wiki",
        {
            name: "公式Wiki",
            url: "https://wiki.azisaba.net",
        },
        {
            name: "非公式Wiki",
            url: "https://aziserver.playing.wiki",
        },
        "投票する",
        {
            name: "Japan Minecraft Servers",
            url: "https://minecraft.jp/servers/azisaba.net",
        },
        {
            name: "monocraft",
            url: "https://monocraft.net/servers/xWBVrf1nqB2P0LxlMm2v",
        },
        {
            name: "NameMC",
            url: "https://ja.namemc.com/server/azisaba.net",
        },
    ];

    let innerWidth;
    $: isMobile = innerWidth < 1056;

    let isSideNavOpen = false;
</script>

<svelte:window bind:innerWidth />

<Header
    company="アジ鯖"
    platformName="公式ホームページ"
    href="/"
    bind:isSideNavOpen
>
    <div slot="skip-to-content">
        <SkipToContent />
    </div>

    <HeaderUtilities>
        {#if !isMobile}
            {#each socials as social}
                <HeaderActionLink
                    title={social.name}
                    icon={{ render: social.iconMini }}
                    href={social.url}
                    target="_blank"
                />
            {/each}
        {/if}

        <HeaderAction>
            <HeaderPanelLinks>
                {#each menu as item}
                    {#if typeof item == "string"}
                        <HeaderPanelDivider>{item}</HeaderPanelDivider>
                    {:else}
                        <HeaderPanelLink href={item.url} target="_blank"
                            >{item.name}</HeaderPanelLink
                        >
                    {/if}
                {/each}
            </HeaderPanelLinks>
        </HeaderAction>
    </HeaderUtilities>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
    <SideNavItems>
        <SideNavMenu text="はじめに" expanded={true}>
            <SideNavLink
                icon={{ render: FavoriteFilled32 }}
                text="ようこそ"
                href="/"
                isSelected={segment === undefined}
            />
            <SideNavLink
                icon={{ render: Fish32 }}
                text="アジ鯖とは？"
                href="/intro"
                isSelected={segment === "intro"}
            />
            <SideNavLink
                    icon={{ render: PlayOutline32 }}
                    text="参加する"
                    href="/join"
                    isSelected={segment === "join"}
            />
            <SideNavLink
                icon={{ render: Connect32 }}
                text="接続する"
                href="/connect"
                isSelected={segment === "connect"}
            />
            <SideNavLink
                    icon={{ render: StarHalf32 }}
                    text="いつもとサイト違うね"
                    href="/not-usual-site"
                    isSelected={segment === "not-usual-site"}
            />
        </SideNavMenu>

        <SideNavMenu text="サーバー一覧"  expanded={true}>
            <SideNavLink
                    icon={{ render: Book32 }}
                    text="ばにらいふ！"
                    href="/server-intro/vanilife"
                    isSelected={segment === "vanilife"}
            />
            <SideNavLink
                    icon={{ render: Book32 }}
                    text="Life"
                    href="/server-intro/life"
                    isSelected={segment === "life"}
            />
            <SideNavLink
                    icon={{ render: Book32 }}
                    text="LeonGunWar"
                    href="/server-intro/leon-gun-war"
                    isSelected={segment === "leon-gun-war"}
            />
            <SideNavLink
                    icon={{ render: PlayOutline32 }}
                    text="Despawn(開発中)"
                    href="/server-intro/despawn"
                    isSelected={segment === "despawn"}
            />
            <SideNavLink
                    icon={{ render: PlayOutline32 }}
                    text="DiveRPG(開発中)"
                    href="/server-intro/diverpg"
                    isSelected={segment === "diverpg"}
            />
            <SideNavLink
                    icon={{ render: PlayOutline32 }}
                    text="Coretol (開発中)"
                    href="/server-intro/coretol"
                    isSelected={segment === "coretol"}
            />
            <SideNavLink
                    icon={{ render: PlayOutline32 }}
                    text="JunkGames(ベータ公開中)"
                    href="/server-intro/junkgames"
                    isSelected={segment === "junkgames"}
            />
        </SideNavMenu>
        <SideNavMenu text="ルール">
            <SideNavLink
                    icon={{ render: Book32 }}
                    text="利用規約"
                    href="/terms"
                    isSelected={segment === "terms"}
            />
            <SideNavLink
                    icon={{ render: Checkbox32 }}
                    text="全体サーバールール"
                    href="/minecraft-all-srv-rule"
                    isSelected={segment === "minecraft-all-srv-rule"}
            />
            <SideNavLink
                    icon={{ render: WatsonHealthStackedScrolling_1_32 }}
                    text="各サーバールール"
                    href="/minecraft-srvs-rule"
                    isSelected={segment === "minecraft-srvs-rule"}
            />
            <SideNavLink
                    icon={{ render: Chat32 }}
                    text="チャットガイドライン"
                    href="/chat-guideline"
                    isSelected={segment === "chat-guideline"}
            />
        </SideNavMenu>

        <SideNavMenu text="その他" expanded={true}>
            <SideNavLink
                    icon={{ render: Gift32 }}
                    text="寄付"
                    target="_blank"
                    href="https://azisaba.buycraft.net/"
            />
            <SideNavLink
                    icon={{ render: Link32 }}
                    text="リンク集"
                    href="/links"
                    isSelected={segment === "links"}
            />
            <SideNavLink
                    icon={{ render: HelpDesk32 }}
                    text="サポート"
                    href="/support"
                    isSelected={segment === "support"}
            />
        </SideNavMenu>
    </SideNavItems>
</SideNav>
