module Button.Button exposing
    ( BrandColor(..)
    , ButtonType(..)
    , Config
    , IconPosition(..)
    , automationId
    , buttonType
    , default
    , destructive
    , destructiveIconButton
    , disabled
    , form
    , href
    , icon
    , iconButton
    , iconPosition
    , onClick
    , primary
    , reverseColor
    , reversed
    , secondary
    , view
    )

import CssModules exposing (css)
import Elm18Compat.Html.Events as Events exposing (defaultOptions, onWithOptions)
import Html exposing (Html, a, button, span, text)
import Html.Attributes
import Html.Attributes.Aria
import Icon.Icon as Icon
import Icon.SvgAsset exposing (SvgAsset)
import Json.Decode as Json
import Maybe



-- VIEW


view : Config msg -> String -> Html msg
view (Config config) label =
    let
        disabledAttr =
            if config.disabled then
                [ Html.Attributes.disabled True ]

            else
                []

        buttonClass =
            [ styles.classList
                [ ( .button, True )
                , ( .primary, config.variant == Primary )
                , ( .secondary, config.variant == Secondary )
                , ( .iconButton, config.iconButton )
                , ( .reversedIconButton, config.iconButton && config.reversed )
                , ( .destructive, config.variant == Destructive )
                , ( .form, config.form )
                , ( .reversed, config.reversed )
                , ( .reverseColorLapis, config.reverseColor == Just Lapis )
                , ( .reverseColorOcean, config.reverseColor == Just Ocean )
                , ( .reverseColorPeach, config.reverseColor == Just Peach )
                , ( .reverseColorSeedling, config.reverseColor == Just Seedling )
                , ( .reverseColorWisteria, config.reverseColor == Just Wisteria )
                , ( .reverseColorYuzu, config.reverseColor == Just Yuzu )
                ]
            ]

        automationIdAttr =
            case config.automationId of
                Just id ->
                    [ Html.Attributes.attribute "data-automation-id" id ]

                Nothing ->
                    []

        titleAttr =
            if config.iconButton then
                [ Html.Attributes.title label
                , Html.Attributes.Aria.ariaLabel label
                ]

            else
                []

        attribs =
            buttonClass
                ++ onClickAttribs (Config config)
                ++ automationIdAttr
                ++ titleAttr
                ++ buttonTypeAttribs (Config config)
    in
    span [ styles.class .container ]
        [ case config.href of
            Just hrefValue ->
                a (attribs ++ [ Html.Attributes.href hrefValue ])
                    [ viewContent (Config config) label |> Html.map never ]

            Nothing ->
                button (attribs ++ disabledAttr)
                    [ viewContent (Config config) label |> Html.map never ]
        ]


onClickAttribs : Config msg -> List (Html.Attribute msg)
onClickAttribs (Config config) =
    case config.onClick of
        Just msg ->
            let
                preventDefault =
                    case config.buttonType of
                        Just buttonTypeValue ->
                            case buttonTypeValue of
                                Submit ->
                                    False

                                Reset ->
                                    False

                        Nothing ->
                            True
            in
            [ onWithOptions
                "click"
                { defaultOptions | preventDefault = preventDefault }
                (Json.succeed msg)
            ]

        Nothing ->
            []


buttonTypeAttribs : Config msg -> List (Html.Attribute msg)
buttonTypeAttribs (Config config) =
    case config.href of
        Just _ ->
            []

        Nothing ->
            case config.buttonType of
                Just buttonTypeValue ->
                    let
                        encodedButtonType =
                            case buttonTypeValue of
                                Submit ->
                                    "submit"

                                Reset ->
                                    "reset"
                    in
                    [ Html.Attributes.type_ encodedButtonType ]

                Nothing ->
                    []


viewContent : Config msg -> String -> Html Never
viewContent (Config config) label =
    span [ styles.class .content ]
        [ viewIconFor config Start
        , viewLabel label config.iconButton
        , viewIconFor config End
        ]


viewLabel : String -> Bool -> Html Never
viewLabel label isIconButton =
    if isIconButton then
        text ""

    else
        span [ styles.class .label ]
            [ text label ]


viewIconFor : ConfigValue msg -> IconPosition -> Html Never
viewIconFor configValue forPosition =
    if configValue.iconPosition == forPosition then
        case configValue.icon of
            Just svgAsset ->
                Icon.view Icon.presentation svgAsset

            Nothing ->
                text ""

    else
        text ""


styles =
    css "cultureamp-style-guide/components/Button/components/GenericButton.module.scss"
        { container = "container"
        , button = "button"
        , primary = "primary"
        , secondary = "secondary"
        , iconButton = "iconButton"
        , reversedIconButton = "reversedIconButton"
        , destructive = "destructive"
        , form = "form"
        , reversed = "reversed"
        , reverseColorLapis = "reverseColorLapis"
        , reverseColorOcean = "reverseColorOcean"
        , reverseColorPeach = "reverseColorPeach"
        , reverseColorSeedling = "reverseColorSeedling"
        , reverseColorWisteria = "reverseColorWisteria"
        , reverseColorYuzu = "reverseColorYuzu"
        , content = "content"
        , label = "label"
        }



-- VARIANTS


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { variant : Variant
    , icon : Maybe SvgAsset
    , iconPosition : IconPosition
    , iconButton : Bool
    , disabled : Bool
    , form : Bool
    , reversed : Bool
    , reverseColor : Maybe BrandColor
    , onClick : Maybe msg
    , href : Maybe String
    , automationId : Maybe String
    , buttonType : Maybe ButtonType
    }


type Variant
    = Default
    | Primary
    | Secondary
    | Destructive


type IconPosition
    = Start
    | End


type BrandColor
    = Lapis
    | Ocean
    | Peach
    | Seedling
    | Wisteria
    | Yuzu


default : Config msg
default =
    Config defaults


defaults : ConfigValue msg
defaults =
    { variant = Default
    , icon = Nothing
    , iconPosition = End
    , iconButton = False
    , disabled = False
    , form = False
    , reversed = False
    , reverseColor = Nothing
    , onClick = Nothing
    , href = Nothing
    , automationId = Nothing
    , buttonType = Nothing
    }


primary : Config msg
primary =
    Config { defaults | variant = Primary }


secondary : Config msg
secondary =
    Config { defaults | variant = Secondary }


destructive : Config msg
destructive =
    Config { defaults | variant = Destructive }


iconButton : SvgAsset -> Config msg
iconButton svgAsset =
    Config { defaults | icon = Just svgAsset, iconButton = True }


destructiveIconButton : SvgAsset -> Config msg
destructiveIconButton svgAsset =
    Config { defaults | icon = Just svgAsset, variant = Destructive, iconButton = True }



-- MODIFIERS


disabled : Bool -> Config msg -> Config msg
disabled value (Config config) =
    Config { config | disabled = value }


icon : SvgAsset -> Config msg -> Config msg
icon svgAsset (Config config) =
    Config { config | icon = Just svgAsset }


iconPosition : IconPosition -> Config msg -> Config msg
iconPosition position (Config config) =
    Config { config | iconPosition = position }


form : Bool -> Config msg -> Config msg
form value (Config config) =
    Config { config | form = value }


reversed : Bool -> Config msg -> Config msg
reversed value (Config config) =
    Config { config | reversed = value }


reverseColor : BrandColor -> Config msg -> Config msg
reverseColor value (Config config) =
    Config { config | reverseColor = Just value }


onClick : msg -> Config msg -> Config msg
onClick value (Config config) =
    Config { config | onClick = Just value }


href : String -> Config msg -> Config msg
href value (Config config) =
    Config { config | href = Just value }


automationId : String -> Config msg -> Config msg
automationId value (Config config) =
    Config { config | automationId = Just value }


type ButtonType
    = Submit
    | Reset


buttonType : ButtonType -> Config msg -> Config msg
buttonType value (Config config) =
    Config { config | buttonType = Just value }
