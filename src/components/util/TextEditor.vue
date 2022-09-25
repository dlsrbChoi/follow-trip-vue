<template>
  <div id="app" class="text-center">
    <div class="container editor">
      <editor-floating-menu :editor="editor" v-slot="editorParams">
        <div
          class="editor__floating-menu"
          :class="{ 'is-active': editorParams.menu.isActive }"
          :style="`top: ${editorParams.menu.top}px`"
        >
          <div
            class="btn-toolbar p-1"
            role="toolbar"
            aria-label="Editor Toolbar"
          >
            <div class="btn-group btn-group-sm mr-2" role="group">
              <editor-menu-button
                command="heading"
                :args="{ level: 1 }"
                :editor-params="editorParams"
                >H1</editor-menu-button
              >
              <editor-menu-button
                command="heading"
                :args="{ level: 2 }"
                :editor-params="editorParams"
                >H2</editor-menu-button
              >
              <editor-menu-button
                command="heading"
                :args="{ level: 3 }"
                :editor-params="editorParams"
                >H3</editor-menu-button
              >
            </div>
            <div class="btn-group btn-group-sm" role="group">
              <editor-menu-button
                command="bullet_list"
                icon="list-ul"
                :editor-params="editorParams"
              />
              <editor-menu-button
                command="ordered_list"
                icon="list-ol"
                :editor-params="editorParams"
              />
            </div>
          </div>
        </div>
      </editor-floating-menu>

      <editor-menu-bubble :editor="editor" v-slot="editorParams">
        <div
          class="menububble border bg-light rounded"
          :class="{ 'is-active': editorParams.menu.isActive }"
          :style="`left: ${editorParams.menu.left}px; bottom: ${editorParams.menu.bottom}px;`"
        >
          <div class="btn-group btn-group-sm" role="group">
            <editor-menu-button command="bold" :editor-params="editorParams" />
            <editor-menu-button
              command="italic"
              :editor-params="editorParams"
            />
            <editor-menu-button
              command="underline"
              :editor-params="editorParams"
            />
            <editor-menu-button
              command="strike"
              icon="strikethrough"
              :editor-params="editorParams"
            />
          </div>
        </div>
      </editor-menu-bubble>
      <editor-component :content="content" :editor="editor"></editor-component>
      <editor-content
        :editor="editor"
        class="editor__content border border-top-0 rounded-bottom p-3"
      />
    </div>
  </div>
</template>

<script>
import {
  Editor,
  EditorContent,
  EditorMenuBubble,
  EditorFloatingMenu,
} from "tiptap";
import {
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from "tiptap-extensions";
import EditorComponent from "./Editor.vue";
import EditorMenuButton from "./EditorMenuButton.vue";

export default {
  name: "app",
  components: {
    EditorComponent,
    EditorMenuButton,
    EditorContent,
    EditorMenuBubble,
    EditorFloatingMenu,
  },
  props: {
    content: {
      default: "<p>추천내용을 입력해주세요.</p>",
    },
    options: {
      default() {
        return {
          menu: [
            "undo",
            "redo",
            [
              "bold",
              "italic",
              "underline",
              {
                command: "strike",
                icon: "strikethrough",
              },
            ],
            [
              "paragraph",
              {
                command: "heading",
                args: {
                  level: 1,
                },
                slot: "H1",
              },
              {
                command: "bullet_list",
                icon: "list-ul",
              },
              {
                command: "ordered_list",
                icon: "list-ol",
              },
            ],
          ],
        };
      },
    },
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new HardBreak(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `${this.content}`,
        onUpdate: ({ getHTML }) => {
          this.$emit("input", getHTML());
        },
      }),
    };
  },
  methods: {
    mapCommand(command) {
      const commands = {
        undo: History,
        redo: History,
      };

      if (Object.prototype.hasOwnProperty.call(commands, command)) {
        return commands[command];
      }
    },
    getCommands(item) {
      if (typeof item === "string") {
        return this.mapCommand(item);
      } else if (typeof item === "object") {
        if (Object.prototype.hasOwnProperty.call(item, "command")) {
          return this.mapCommand(item.command);
        } else {
          return item.map(this.getCommands);
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "~@fortawesome/fontawesome-free/css/all.css";
.ProseMirror {
  text-align: initial;

  &:focus {
    /*outline: none;*/
  }
}

.editor {
  position: relative;
  width: 100%;
  &__floating-menu {
    position: absolute;
    z-index: 1;
    margin-top: -0.75rem;
    margin-left: 1rem;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;
    &.is-active {
      opacity: 1;
      visibility: visible;
    }
  }

  .menububble {
    position: absolute;
    display: flex;
    z-index: 20;
    margin-bottom: 0.5rem;
    transform: translateX(-50%);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;

    &.is-active {
      opacity: 1;
      visibility: visible;
    }

    &__form {
      display: flex;
      align-items: center;
    }

    &__input {
      font: inherit;
      border: none;
      background: transparent;
    }
  }
}
</style>
