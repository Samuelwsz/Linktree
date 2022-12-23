import "./SocialMidia.css"

const SocialMidia = () => {
  const listNetworks = [
    { id: 1, urlName: "Instagran", url: "https://www.instagram.com/" },
    { id: 2, urlName: "Twitter", url: "https://twitter.com" },
    { id: 3, urlName: "Discord", url: "https://discord.com" },
    { id: 4, urlName: "Twitch", url: "https://www.twitch.tv" },
    { id: 5, urlName: "Youtube", url: "https://www.youtube.com" },
  ]

  const linkNetworks = listNetworks.map((props) => (
    <div key={props.id} className="content_links">
      <a target="_blank" href={props.url}>
        {props.urlName}
      </a>
    </div>
  ))

  return <>{linkNetworks}</>
}

export default SocialMidia
