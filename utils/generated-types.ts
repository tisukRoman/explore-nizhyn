/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/comments": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.comments.id"];
          created_at?: parameters["rowFilter.comments.created_at"];
          post_id?: parameters["rowFilter.comments.post_id"];
          user_id?: parameters["rowFilter.comments.user_id"];
          text?: parameters["rowFilter.comments.text"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["comments"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** comments */
          comments?: definitions["comments"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.comments.id"];
          created_at?: parameters["rowFilter.comments.created_at"];
          post_id?: parameters["rowFilter.comments.post_id"];
          user_id?: parameters["rowFilter.comments.user_id"];
          text?: parameters["rowFilter.comments.text"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.comments.id"];
          created_at?: parameters["rowFilter.comments.created_at"];
          post_id?: parameters["rowFilter.comments.post_id"];
          user_id?: parameters["rowFilter.comments.user_id"];
          text?: parameters["rowFilter.comments.text"];
        };
        body: {
          /** comments */
          comments?: definitions["comments"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          location?: parameters["rowFilter.profiles.location"];
          about?: parameters["rowFilter.profiles.about"];
          wallpaper_url?: parameters["rowFilter.profiles.wallpaper_url"];
          role_id?: parameters["rowFilter.profiles.role_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          location?: parameters["rowFilter.profiles.location"];
          about?: parameters["rowFilter.profiles.about"];
          wallpaper_url?: parameters["rowFilter.profiles.wallpaper_url"];
          role_id?: parameters["rowFilter.profiles.role_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          location?: parameters["rowFilter.profiles.location"];
          about?: parameters["rowFilter.profiles.about"];
          wallpaper_url?: parameters["rowFilter.profiles.wallpaper_url"];
          role_id?: parameters["rowFilter.profiles.role_id"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/tags": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.tags.id"];
          name?: parameters["rowFilter.tags.name"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["tags"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** tags */
          tags?: definitions["tags"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.tags.id"];
          name?: parameters["rowFilter.tags.name"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.tags.id"];
          name?: parameters["rowFilter.tags.name"];
        };
        body: {
          /** tags */
          tags?: definitions["tags"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/posts": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.posts.id"];
          created_at?: parameters["rowFilter.posts.created_at"];
          title?: parameters["rowFilter.posts.title"];
          description?: parameters["rowFilter.posts.description"];
          author_id?: parameters["rowFilter.posts.author_id"];
          content?: parameters["rowFilter.posts.content"];
          img_src?: parameters["rowFilter.posts.img_src"];
          tag?: parameters["rowFilter.posts.tag"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["posts"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** posts */
          posts?: definitions["posts"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.posts.id"];
          created_at?: parameters["rowFilter.posts.created_at"];
          title?: parameters["rowFilter.posts.title"];
          description?: parameters["rowFilter.posts.description"];
          author_id?: parameters["rowFilter.posts.author_id"];
          content?: parameters["rowFilter.posts.content"];
          img_src?: parameters["rowFilter.posts.img_src"];
          tag?: parameters["rowFilter.posts.tag"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.posts.id"];
          created_at?: parameters["rowFilter.posts.created_at"];
          title?: parameters["rowFilter.posts.title"];
          description?: parameters["rowFilter.posts.description"];
          author_id?: parameters["rowFilter.posts.author_id"];
          content?: parameters["rowFilter.posts.content"];
          img_src?: parameters["rowFilter.posts.img_src"];
          tag?: parameters["rowFilter.posts.tag"];
        };
        body: {
          /** posts */
          posts?: definitions["posts"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/roles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.roles.id"];
          name?: parameters["rowFilter.roles.name"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["roles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** roles */
          roles?: definitions["roles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.roles.id"];
          name?: parameters["rowFilter.roles.name"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.roles.id"];
          name?: parameters["rowFilter.roles.name"];
        };
        body: {
          /** roles */
          roles?: definitions["roles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  comments: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `posts.id`.<fk table='posts' column='id'/>
     */
    post_id?: number;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    user_id?: string;
    /** Format: text */
    text?: string;
  };
  profiles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: text */
    username?: string;
    /** Format: text */
    avatar_url?: string;
    /** Format: text */
    location?: string;
    /** Format: text */
    about?: string;
    /** Format: text */
    wallpaper_url?: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `roles.id`.<fk table='roles' column='id'/>
     */
    role_id?: number;
  };
  tags: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: text */
    name?: string;
  };
  posts: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    title?: string;
    /** Format: text */
    description?: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    author_id?: string;
    /** Format: text */
    content?: string;
    /** Format: text */
    img_src?: string;
    /** Format: text */
    tag?: string;
  };
  /** @description admin | author | reader */
  roles: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: text
     * @default reader
     */
    name?: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description comments */
  "body.comments": definitions["comments"];
  /** Format: bigint */
  "rowFilter.comments.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.comments.created_at": string;
  /** Format: bigint */
  "rowFilter.comments.post_id": string;
  /** Format: uuid */
  "rowFilter.comments.user_id": string;
  /** Format: text */
  "rowFilter.comments.text": string;
  /** @description profiles */
  "body.profiles": definitions["profiles"];
  /** Format: uuid */
  "rowFilter.profiles.id": string;
  /** Format: text */
  "rowFilter.profiles.username": string;
  /** Format: text */
  "rowFilter.profiles.avatar_url": string;
  /** Format: text */
  "rowFilter.profiles.location": string;
  /** Format: text */
  "rowFilter.profiles.about": string;
  /** Format: text */
  "rowFilter.profiles.wallpaper_url": string;
  /** Format: bigint */
  "rowFilter.profiles.role_id": string;
  /** @description tags */
  "body.tags": definitions["tags"];
  /** Format: bigint */
  "rowFilter.tags.id": string;
  /** Format: text */
  "rowFilter.tags.name": string;
  /** @description posts */
  "body.posts": definitions["posts"];
  /** Format: bigint */
  "rowFilter.posts.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.posts.created_at": string;
  /** Format: text */
  "rowFilter.posts.title": string;
  /** Format: text */
  "rowFilter.posts.description": string;
  /** Format: uuid */
  "rowFilter.posts.author_id": string;
  /** Format: text */
  "rowFilter.posts.content": string;
  /** Format: text */
  "rowFilter.posts.img_src": string;
  /** Format: text */
  "rowFilter.posts.tag": string;
  /** @description roles */
  "body.roles": definitions["roles"];
  /** Format: bigint */
  "rowFilter.roles.id": string;
  /** Format: text */
  "rowFilter.roles.name": string;
}

export interface operations {}

export interface external {}
