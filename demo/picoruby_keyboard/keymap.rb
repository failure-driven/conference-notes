require "consumer_key"

kbd = Keyboard.new

kbd.init_direct_pins([
  3,  4,  6, 29,
  2,  1,  7,  0
])

kbd.add_layer :default, %i[
  COPY           RAILS    CONSOLE    PASTE
  BKSP_LEFT      BUNDLE   RAKE       DEL_RIGHT
]

kbd.add_layer :right, %i[
  KC_MUTE        KC_VOLD  KC_VOLU    KC_MPLY
  ADJUST_BOOT    KC_MPRV  KC_MNXT    DEL_RIGHT
]

kbd.add_layer :left, %i[
  KC_WHOM        KC_BRID  KC_BRIU    KC_CALC
  BKSP_LEFT      KC_WBAK  KC_WFWD    ADJUST_BOOT
]

kbd.add_layer :adjust, %i[
  RGB_RMOD       RGB_SAI  RGB_VAI    RGB_MOD
  ADJUST_BOOT    RGB_SAD  RGB_VAD    ADJUST_BOOT
]

# Ctrl and others
kbd.define_mode_key :SELALL, [ %i[KC_RCTL KC_A], nil, 200, 200 ]
kbd.define_mode_key :SAVE,   [ %i[KC_RCTL KC_S], nil, 200, 200 ]
kbd.define_mode_key :UNDO,   [ %i[KC_RCTL KC_Z], nil, 200, 200 ]
kbd.define_mode_key :REDO,   [ %i[KC_RCTL KC_Y], nil, 200, 200 ]
kbd.define_mode_key :COPY,   [ %i[KC_RCTL KC_C], nil, 200, 200 ]
kbd.define_mode_key :PASTE,  [ %i[KC_RCTL KC_V], nil, 200, 200 ]

# when tap any key, and Hold move layer
kbd.define_mode_key :BKSP_LEFT,    [ :KC_LEFT,  :left,  200, 200 ]
kbd.define_mode_key :DEL_RIGHT,    [ :KC_RIGHT, :right,  200, 200 ]
kbd.define_mode_key :ADJUST_BOOT, [ Proc.new { kbd.bootsel! }, :adjust,  200, 200 ]

# macro
kbd.define_mode_key :BUNDLE, [ Proc.new { kbd.macro("echo \"Hello Kickboxer\"") }, nil, 200, nil]
kbd.define_mode_key :RAILS, [ Proc.new { kbd.macro("rails s") }, nil, 200, nil]
kbd.define_mode_key :CONSOLE, [ Proc.new { kbd.macro("rails c") }, nil, 200, nil]
kbd.define_mode_key :RAKE, [ Proc.new { kbd.macro("make", []) }, nil, 200, nil]

rgb = RGB.new(
  26,
  1,
  4,
  false
)

rgb.effect = :swirl
rgb.speed = 25
rgb.value = 31
kbd.append rgb

kbd.start!
